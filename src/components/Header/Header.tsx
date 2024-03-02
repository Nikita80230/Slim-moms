// import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import { Link, NavLink } from "react-router-dom";

import logo from "@/assets/images/logoHeader.png";
import mobileLogo from "@/assets/images/MobileLogo.png";
import tabletLogo from "@/assets/images/tabletLogo.png";
import { Container, UserMenu, UserMenuPanel } from "@/components";

import { StyledHeader } from "./Styled";

import { RoutePath } from "@/routes/routes";

type CurrentScreen = "desktop" | "tablet" | "mobile";

const logoByScreen: Record<CurrentScreen, string> = {
  desktop: logo,
  tablet: tabletLogo,
  mobile: mobileLogo,
};

const Header = () => {
  const isLoggedIn = false;

  let currentScreen: CurrentScreen = "desktop";

  const isTablet = useMediaQuery({
    query: "(min-width: 565px) and (max-width: 768px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 564px)" });

  if (isMobile) currentScreen = "mobile";
  if (isTablet) currentScreen = "tablet";

  return (
    <StyledHeader>
      <Container>
        <div className="headerOuter">
          <nav className="header">
            <Link className="logo" to={RoutePath.MAIN}>
              <img
                className="logoImg"
                src={logoByScreen[currentScreen]}
                alt="logo"
              />
            </Link>

            <div className="navigation">
              {isLoggedIn ? <AuthorizedUser /> : <NotAuthorizedUser />}
            </div>
          </nav>
        </div>
      </Container>
      {isMobile && isLoggedIn && (
        <div className="userMenuPanel">
          <UserMenuPanel />
        </div>
      )}
    </StyledHeader>
  );
};

const AuthorizedUser = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    // <StyledAuthorizedUser>
    <>
      {!isTablet && (
        <>
          <NavLink className="headerLink" to={RoutePath.DIARY}>
            Dairy
          </NavLink>
          <NavLink className="headerLink" to={RoutePath.CALCULATOR}>
            Calculator
          </NavLink>
        </>
      )}
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
