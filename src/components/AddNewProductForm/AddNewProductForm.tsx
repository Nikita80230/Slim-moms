// import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import AsyncSelect from "react-select/async";
import * as yup from "yup";

import { addProduct, getProductListByQuery } from "@/redux/user/operations";
import { selectDate } from "@/redux/user/userSlice";

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

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
  const dispatch = useAppDispatch();

  const loadOptions = (
    inputValue: string,
    callback: (options: { value: string; label: string; id: string }[]) => void
  ) => {
    dispatch(getProductListByQuery(inputValue))
      .unwrap()
      .then((data) => {
        console.log("data from component-->", data);
        const formattedData = data.map(({ _id, title: { en } }) => {
          return { value: en, label: en, id: _id };
        });
        console.log(formattedData);
        callback(formattedData);
      });
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      weight: "",
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      const addNewProductFormData = {
        weight: Number(values.weight),
        date: date.slice(0, 10),
        productId: values.id,
      };
      console.log("addNewProductFormData --> ", addNewProductFormData);
      dispatch(addProduct(addNewProductFormData));
    },
  });

  return (
    <StyledAddNewProductForm onSubmit={formik.handleSubmit}>
      <div className="inputsWrapper">
        <AsyncSelect
          className="basic-single productName"
          classNamePrefix="select"
          name="color"
          loadOptions={loadOptions}
          onChange={(item) => {
            // console.log(item);
            formik.setFieldValue("id", item?.id);
          }}
          placeholder={<div>Enter product name</div>}
        />
        {/* <InputGroup
          onChange={handleSearchQuery}
          value={searchQuery}
          className="productName"
          name="productName"
          labelText="Enter product name"
        /> */}
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
