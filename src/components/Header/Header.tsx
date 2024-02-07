import { Link, NavLink } from "react-router-dom";

import logo from "@/assets/images/logo-header.png";

import { StyledHeader } from "./Styled";

import { RoutePath } from "@/types/routes/routes";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header">
        <Link className="logo" to={RoutePath.MAIN}>
          <img className="logoImg" src={logo} alt="logo" />
        </Link>
        <div className="navigation">
          <NavLink className="headerLink" to={RoutePath.LOGIN}>
            log in
          </NavLink>
          <NavLink className="headerLink" to={RoutePath.REGISTER}>
            registration
          </NavLink>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
