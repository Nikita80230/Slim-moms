import { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import { registration } from "@/redux/auth/operations";

import { useAppDispatch } from "@/hooks/hooks";

import { InputGroup } from "@/components";

import { StyledBtnWrapper, StyledRegisterForm } from "./Styled";

import { RoutePath } from "@/types/Routes";
import { UserAuthData } from "@/types/UserTypes";

const RegisterForm = () => {
  const [userRegisterFormData, setUserRegisterFormData] =
    useState<UserAuthData>({
      email: "",
      password: "",
      username: "",
    });

  const dispatch = useAppDispatch();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(userRegisterFormData);

    dispatch(registration(userRegisterFormData));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserRegisterFormData({
      ...userRegisterFormData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <StyledRegisterForm>
      <h2 className="authTitle">Register</h2>
      <form className="authForm" onSubmit={handleSubmit}>
        <InputGroup
          required
          type="text"
          name={"username"}
          labelText="name"
          onChange={handleChange}
        />
        <InputGroup
          required
          type="email"
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
