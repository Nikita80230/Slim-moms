import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { registration } from "@/redux/auth/operations";

import { useAppDispatch } from "@/hooks/hooks";

import { InputGroup } from "@/components";
import { RoutePath } from "@/routes/routes";

import { StyledBtnWrapper, StyledRegisterForm } from "./Styled";

import { UserAuthFormData } from "@/types/User";

import * as yup from "yup";

const personSchema = yup.object({
  username: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(8),
});

const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik<Required<UserAuthFormData>>({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: personSchema,
    onSubmit: (values) => {
      console.log(values);

      dispatch(registration(values));
    },
  });

  return (
    <StyledRegisterForm>
      <h2 className="authTitle">Register</h2>
      <form className="authForm" onSubmit={formik.handleSubmit}>
        <InputGroup
          required
          type="text"
          name="username"
          labelText="name"
          value={formik.values.username}
          onChange={formik.handleChange}
          error={formik.errors.username}
          touched={formik.touched.username}
        />
        <InputGroup
          required
          type="email"
          name={"email"}
          labelText="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.errors.email}
          touched={formik.touched.email}
        />
        <InputGroup
          required
          type="password"
          name="password"
          labelText="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
          touched={formik.touched.password}
        />
        <StyledBtnWrapper>
          <button className="register button" type="submit">
            Register
          </button>
          <Link to={RoutePath.LOGIN}>
            <button className="login button" type="button">
              Log in
            </button>
          </Link>
        </StyledBtnWrapper>
      </form>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
