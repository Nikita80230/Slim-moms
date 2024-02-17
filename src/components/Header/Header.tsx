// import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";

import logo from "@/assets/images/logoHeader.png";
import mobileLogo from "@/assets/images/MobileLogo.png";
import tabletLogo from "@/assets/images/tabletLogo.png";
import { UserMenu } from "@/components";

import { StyledHeader } from "./Styled";

import { RoutePath } from "@/types/routes/routes";

const Header = () => {
  const isLoggedIn = false;

  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 564px)" });

  return (
    <StyledHeader>
      <nav className="header">
        <Link className="logo" to={RoutePath.MAIN}>
          {isMobile ? (
            <img className="logoImg" src={mobileLogo} alt="logo" />
          ) : (
            <img
              className="logoImg"
              src={isTablet ? tabletLogo : logo}
              alt="logo"
            />
          )}
        </Link>

        <div className="navigation">
          {isLoggedIn ? <AuthorizedUser /> : <NotAuthorizedUser />}
        </div>
      </nav>
    </StyledHeader>
  );
};

const AuthorizedUser = () => {
  return (
    // <StyledAuthorizedUser>
    <>
      <NavLink className="headerLink" to={RoutePath.DIARY}>
        Dairy
      </NavLink>
      <NavLink className="headerLink" to={RoutePath.CALCULATOR}>
        Calculator
      </NavLink>
      <UserMenu />
    </>
    // </StyledAuthorizedUser>
  );
};

const NotAuthorizedUser = () => {
  return (
    <>
      <NavLink className="headerLink" to={RoutePath.LOGIN}>
        Log in
      </NavLink>
      <NavLink className="headerLink" to={RoutePath.REGISTER}>
        Registration
      </NavLink>
    </>
  );
};

export default Header;
