import { Link } from "react-router-dom";

import { InputGroup } from "@/components";

import { StyledBtnWrapper, StyledRegisterForm } from "./Styled";

import { RoutePath } from "@/types/routes/routes";

const RegisterForm = () => {
  return (
    <StyledRegisterForm>
      <h2 className="authTitle">Register</h2>
      <form className="authForm">
        <InputGroup required type="text" name={"userName"} labelText="name" />
        <InputGroup required type="email" name={"email"} labelText="email" />
        <InputGroup
          required
          type="password"
          name="password"
          labelText="password"
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
