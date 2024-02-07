import { Link } from "react-router-dom";

import { InputGroup } from "@/components";

import { StyledAuthForm, StyledBtnWrapper } from "./Styled";

import { RoutePath } from "@/types/routes/routes";

const LoginForm = () => {
  return (
    <StyledAuthForm>
      <h2 className="authTitle">Log In</h2>
      <form className="authForm">
        <InputGroup required name={"email"} labelText="email" />
        <InputGroup
          required
          type="password"
          name="password"
          labelText="password"
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
