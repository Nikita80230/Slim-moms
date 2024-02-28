import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { login } from "@/redux/auth/operations";

import { useAppDispatch } from "@/hooks/hooks";

import { InputGroup } from "@/components";

import { StyledAuthForm, StyledBtnWrapper } from "./Styled";

import { RoutePath } from "@/types/Routes";
import { UserAuthData } from "@/types/UserTypes";

const LoginForm = () => {
  const [userLoginFormData, setUserLoginFormData] = useState<UserAuthData>({
    email: "",
    password: "",
  });

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(userLoginFormData);

    dispatch(login(userLoginFormData));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserLoginFormData({
      ...userLoginFormData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <StyledAuthForm>
      <h2 className="authTitle">Log In</h2>
      <form className="authForm" onSubmit={handleSubmit}>
        <InputGroup
          required
          name={"email"}
          labelText="email"
          onChange={handleChange}
        />
        <InputGroup
          required
          type="password"
          name="password"
          labelText="password"
          onChange={handleChange}
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
