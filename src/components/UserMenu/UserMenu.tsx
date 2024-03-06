import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import CloseModalMenuIcon from "@/assets/images/closeModalImg.svg?react";
import MobileBurgerMenuIcon from "@/assets/images/mobileBurgerMenuIcon.svg?react";
import { ModalNavMenu, UserMenuPanel } from "@/components";

import { StyledUserMenu } from "./Styled";

const UserMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: "(max-width:564px)" });

  // const handleCancel = () => {
  //   setIsMenuOpened(!isMenuOpened);
  // };

  useEffect(() => {
    if (isMenuOpened) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpened]);

  return (
    <StyledUserMenu>
      {!isMobile && <UserMenuPanel />}
      <button
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        type="button"
        className="mobileBurgerMenuBtn"
      >
        {isMenuOpened ? <CloseModalMenuIcon /> : <MobileBurgerMenuIcon />}
      </button>
      {isMenuOpened && <ModalNavMenu />}
    </StyledUserMenu>
  );
};

export default UserMenu;
