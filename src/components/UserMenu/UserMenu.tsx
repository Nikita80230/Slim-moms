import MobileBurgerMenuIcon from "@/assets/images/mobileBurgerMenuIcon.svg?react";

import { StyledUserMenu } from "./Styled";

const UserMenu = () => {
  return (
    <StyledUserMenu>
      <div className="tablet_desktopUserMenu">
        <span className="userName">Mykyta</span>
        <div className="divider"></div>
        <button className="exitBtn" type="button">
          Exit
        </button>
      </div>
      <button type="button" className="mobileBurgerMenuBtn">
        <MobileBurgerMenuIcon />
      </button>
    </StyledUserMenu>
  );
};

export default UserMenu;
