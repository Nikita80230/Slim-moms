import { useFormik } from "formik";
import { Link } from "react-router-dom";

import { login } from "@/redux/auth/operations";

import { useAppDispatch } from "@/hooks/hooks";

import { InputGroup } from "@/components";
import { RoutePath } from "@/routes/routes";

import { StyledAuthForm, StyledBtnWrapper } from "./Styled";

import { UserAuthFormData } from "@/types/User";

const LoginForm = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik<Pick<UserAuthFormData, "email" | "password">>({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);

      dispatch(login(values));
    },
  });
  return (
    <StyledAuthForm>
      <h2 className="authTitle">Log In</h2>
      <form className="authForm" onSubmit={formik.handleSubmit}>
        <InputGroup
          required
          name={"email"}
          labelText="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <InputGroup
          required
          type="password"
          name="password"
          labelText="password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <StyledBtnWrapper>
          <button className="login" type="submit">
            Log in
          </button>
          <Link to={RoutePath.REGISTER}>
            <button className="register" type="button">
              Register
            </button>
          </Link>
        </StyledBtnWrapper>
      </form>
    </StyledAuthForm>
  );
};

export default LoginForm;
