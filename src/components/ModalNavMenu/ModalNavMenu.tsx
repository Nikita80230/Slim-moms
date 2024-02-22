// import { FC } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

import { StyledModalNavMenu } from "./Styled";

import { RoutePath } from "@/types/routes/routes";

// type Props = {
//   closeModal: ()=> void;
// };

const ModalNavMenu = () => {
  return createPortal(
    <StyledModalNavMenu>
      <div className="modalNavMenu">
        <NavLink className="link" to={RoutePath.DIARY}>
          Diary
        </NavLink>
        <NavLink className="link" to={RoutePath.CALCULATOR}>
          Calculator
        </NavLink>
      </div>
    </StyledModalNavMenu>,
    document.querySelector("#root") as HTMLElement
  );
};

export default ModalNavMenu;
