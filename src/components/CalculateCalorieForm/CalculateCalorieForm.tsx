import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";

import {
  getNotAllowProductList,
  getUserDailyRate,
} from "@/redux/user/operations";
import { selectIsLoggedIn } from "@/redux/user/userSlice";

import { useAppDispatch, useAppSelector } from "@/hooks/hooks";

import { InputGroup, Modal } from "@/components";

import { StyledCalculateCalorieForm } from "./Styled";

import { CalculateCaloriesFormData } from "@/types/Diary";

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
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  const formik = useFormik<CalculateCaloriesFormData<string>>({
    initialValues: {
      height: "",
      age: "",
      weight: "",
      desiredWeight: "",
      bloodType: "",
    },
    validationSchema: personSchema,
    onSubmit: (values) => {
      const userCalculateCaloriesFormData: CalculateCaloriesFormData = {
        weight: Number(values.weight),
        height: Number(values.height),
        age: Number(values.age),
        desiredWeight: Number(values.desiredWeight),
        bloodType: Number(values.bloodType),
      };
      if (isLoggedIn) {
        dispatch(getUserDailyRate(userCalculateCaloriesFormData));
      } else {
        dispatch(getNotAllowProductList(userCalculateCaloriesFormData));
        setIsModalOpen(true);
      }
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
              error={formik.errors.height}
              touched={formik.touched.height}
              required
              name={"height"}
              labelText="height"
            />
            <InputGroup
              onChange={formik.handleChange}
              value={formik.values.age}
              error={formik.errors.age}
              touched={formik.touched.age}
              required
              name={"age"}
              labelText="age"
            />
            <InputGroup
              onChange={formik.handleChange}
              value={formik.values.weight}
              error={formik.errors.weight}
              touched={formik.touched.weight}
              required
              name={"weight"}
              labelText="current weight"
            />
          </div>
          <div className="calculateCaloriesFormRight">
            <InputGroup
              onChange={formik.handleChange}
              value={formik.values.desiredWeight}
              error={formik.errors.desiredWeight}
              touched={formik.touched.desiredWeight}
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
      </form>
      {isModalOpen && <Modal closeModal={handleCancel} isOpen={isModalOpen} />}
    </StyledCalculateCalorieForm>
  );
};

export default CalculateCalorieForm;
