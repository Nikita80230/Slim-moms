import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

import { getNotAllowProductList } from "@/redux/auth/operations";

import { useAppDispatch } from "@/hooks/hooks";

import { InputGroup, Modal } from "@/components";

import { StyledCalculateCalorieForm } from "./Styled";

import {
  CalculateCaloriesFormDataResponse,
  UserCalculateCaloriesFormData,
} from "@/types/Dairy";

const personSchema = yup.object({
  height: yup.string().required().min(3).max(3),
  age: yup.string().required().min(2).max(3),
  weight: yup.string().required().min(2).max(3),
  desiredWeight: yup.string().required().min(2).max(3),
  bloodType: yup.string().required(),
});

const CalculateCalorieForm = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const formik = useFormik<UserCalculateCaloriesFormData>({
    initialValues: {
      height: "",
      age: "",
      weight: "",
      desiredWeight: "",
      bloodType: "",
    },
    validationSchema: personSchema,
    onSubmit: (values) => {
      const userCalculateCaloriesFormData: CalculateCaloriesFormDataResponse = {
        weight: +values.weight,
        height: +values.height,
        age: +values.age,
        desiredWeight: +values.desiredWeight,
        bloodType: +values.bloodType,
      };

      dispatch(getNotAllowProductList(userCalculateCaloriesFormData));
      setIsModalOpen(true);
    },
  });

  // const handleOpenModal = () => {
  //   setIsModalOpen(true);
  // };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <StyledCalculateCalorieForm>
      <h1 className="calculateCaloriesFormTitle">
        Calculate your daily calorie intake right now
      </h1>
      <form className="calculateCaloriesForm" onSubmit={formik.handleSubmit}>
        <div className="calculateCaloriesFormInputs">
          <div className="calculateCaloriesFormLeft">
            <InputGroup
              onChange={formik.handleChange}
              value={formik.values.height}
              required
              name={"height"}
              labelText="height"
            />
            <InputGroup
              onChange={formik.handleChange}
              value={formik.values.age}
              required
              name={"age"}
              labelText="age"
            />
            <InputGroup
              onChange={formik.handleChange}
              value={formik.values.weight}
              required
              name={"weight"}
              labelText="current weight"
            />
          </div>
          <div className="calculateCaloriesFormRight">
            <InputGroup
              onChange={formik.handleChange}
              value={formik.values.desiredWeight}
              required
              className="desiredWeight"
              name={"desiredWeight"}
              labelText="desired weight"
            />
            <div className="radioWrapper">
              <span className="radioTitle">Blood type *</span>
              <div className="radioInputWrapper">
                <InputGroup
                  onChange={formik.handleChange}
                  type="radio"
                  name="bloodType"
                  labelText="1"
                  value="1"
                />
                <InputGroup
                  onChange={formik.handleChange}
                  type="radio"
                  name="bloodType"
                  labelText="2"
                  value="2"
                />
                <InputGroup
                  onChange={formik.handleChange}
                  type="radio"
                  name="bloodType"
                  labelText="3"
                  value="3"
                />
                <InputGroup
                  onChange={formik.handleChange}
                  type="radio"
                  name="bloodType"
                  labelText="4"
                  value="4"
                />
              </div>
            </div>
          </div>
        </div>

        <button className="calculateCalorieFormButton" type="submit">
          Start losing weight
        </button>
        <button
          className="calculateCalorieFormButton"
          type="button"
          // onClick={handleOpenModal}
        >
          test modal
        </button>
      </form>
      {isModalOpen && <Modal closeModal={handleCancel} isOpen={isModalOpen} />}
    </StyledCalculateCalorieForm>
  );
};

export default CalculateCalorieForm;
