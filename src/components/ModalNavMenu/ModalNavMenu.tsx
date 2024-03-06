// import { FC } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";

import { RoutePath } from "@/routes/routes";

import { StyledModalNavMenu } from "./Styled";

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
