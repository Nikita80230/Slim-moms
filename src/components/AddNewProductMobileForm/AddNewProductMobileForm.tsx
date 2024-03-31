import { useFormik } from "formik";
import { debounce } from "lodash";
import { Link } from "react-router-dom";
import AsyncSelect from "react-select/async";
import * as yup from "yup";

import { addProduct, getProductListByQuery } from "@/redux/user/operations";
import { selectDate } from "@/redux/user/userSlice";

import { useAppSelector } from "@/hooks/hooks";
import { useAppDispatch } from "@/hooks/hooks";

import IconMobileCloseBtnSvg from "@/assets/images/mobileCloseBtnSvg.svg?react";
import { InputGroup } from "@/components";
import { RoutePath } from "@/routes/routes";

import { StyledAddNewProductMobileForm } from "./Styled";

const productSchema = yup.object({
  productName: yup.string(),
  data: yup.string(),
  weight: yup.string(),
});

const AddNewProductMobileForm = () => {
  const dispatch = useAppDispatch();
  const date = useAppSelector(selectDate);

  const loadOptions = debounce(
    (
      inputValue: string,
      callback: (
        options: { value: string; label: string; id: string }[]
      ) => void
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
    },
    500
  );

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
          <AsyncSelect
            className="basic-single formInput"
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
            value={formik.values.id}
            onChange={formik.handleChange}
            className="formInput"
            name="productName"
            labelText="Enter product name"
          /> */}
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
