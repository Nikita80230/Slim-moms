import { nanoid } from "@reduxjs/toolkit";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";

import IconMobileCloseBtnSvg from "@/assets/images/mobileCloseBtnSvg.svg?react";
import { InputGroup } from "@/components";
import { RoutePath } from "@/routes/routes";

import { StyledAddNewProductMobileForm } from "./Styled";
// import { useAppDispatch } from "@/hooks/hooks";

const productSchema = yup.object({
  productName: yup.string(),
  data: yup.string(),
  weight: yup.string(),
});

const AddNewProductMobileForm = () => {
  // const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      productName: "",
      weight: "",
    },
    validationSchema: productSchema,
    onSubmit: (values) => {
      const addNewProductFormData = {
        weight: +values.weight,
        data: "",
        id: nanoid(),
      };
      console.log("addNewProductFormData --> ", addNewProductFormData);
      // dispatch(getNotAllowProductList(userCalculateCaloriesFormData));
      // setIsModalOpen(true);
    },
  });

  return (
    <StyledAddNewProductMobileForm>
      <Link to={RoutePath.DIARY}>
        <button type="button" className="addProductCloseBtn">
          <IconMobileCloseBtnSvg className="addProductCloseIcon" />
        </button>
      </Link>
      <form className="addProductForm" onSubmit={formik.handleSubmit}>
        <div className="formInputs">
          <InputGroup
            value={formik.values.productName}
            onChange={formik.handleChange}
            className="formInput"
            name="productName"
            labelText="Enter product name"
          />
          <InputGroup
            onChange={formik.handleChange}
            value={formik.values.weight}
            className="formInput"
            name="weight"
            labelText="Grams"
          />
        </div>
        <button className="addProductBtn" type="submit">
          Add
        </button>
      </form>
    </StyledAddNewProductMobileForm>
  );
};

export default AddNewProductMobileForm;
