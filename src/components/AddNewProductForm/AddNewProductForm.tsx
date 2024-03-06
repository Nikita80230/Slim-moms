import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { ChangeEvent, useEffect, useState } from "react";
import * as yup from "yup";

import { selectDate } from "@/redux/user/userSlice";

import { useAppSelector } from "@/hooks/hooks";

import addProductBtnImg from "@/assets/images/addProductBtnImg.png";
import { InputGroup } from "@/components";

import { StyledAddNewProductForm } from "./Styled";

const productSchema = yup.object({
  id: yup.string(),
  date: yup.string(),
  weight: yup.string(),
});

const AddNewProductForm = () => {
  const date = useAppSelector(selectDate);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {}, [searchQuery]);

  const formik = useFormik({
    initialValues: {
      id: "",
      weight: "",
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      const addNewProductFormData = {
        weight: Number(values.weight),
        date: date,
        id: nanoid(),
      };
      console.log("addNewProductFormData --> ", addNewProductFormData);
      // dispatch(getNotAllowProductList(userCalculateCaloriesFormData));
      // setIsModalOpen(true);
    },
  });

  return (
    <StyledAddNewProductForm onSubmit={formik.handleSubmit}>
      <div className="inputsWrapper">
        <InputGroup
          onChange={handleSearchQuery}
          value={searchQuery}
          className="productName"
          name="productName"
          labelText="Enter product name"
        />
        <InputGroup
          onChange={formik.handleChange}
          value={formik.values.weight}
          className="productWeight"
          name="weight"
          labelText="grams"
        />
      </div>
      <button className="addProductBtn" type="submit">
        <img src={addProductBtnImg} alt="add new product" />
      </button>
    </StyledAddNewProductForm>
  );
};

export default AddNewProductForm;
