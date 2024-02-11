// import { FC } from "react";
import { Link, NavLink } from "react-router-dom";

import logo from "@/assets/images/logo-header.png";

import { StyledHeader } from "./Styled";

import { RoutePath } from "@/types/routes/routes";

const Header = () => {
  const isLoggedIn = true;

  return (
    <StyledHeader>
      <nav className="header">
        <Link className="logo" to={RoutePath.MAIN}>
          <img className="logoImg" src={logo} alt="logo" />
        </Link>

        <div className="navigation">
          {isLoggedIn ? (
            <>
              <NavLink className="headerLink" to={RoutePath.DIARY}>
                Dairy
              </NavLink>
              <NavLink className="headerLink" to={RoutePath.CALCULATOR}>
                Calculator
              </NavLink>
            </>
          ) : (
            <>
              <NavLink className="headerLink" to={RoutePath.LOGIN}>
                Log in
              </NavLink>
              <NavLink className="headerLink" to={RoutePath.REGISTER}>
                Registration
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </StyledHeader>
  );
};

export default Header;
