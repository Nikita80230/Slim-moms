import styled from "styled-components";

import backgroundPliama from "@/assets/images/background-pliama.png";
import backgroundImg from "@/assets/images/Group4.png";
import tabletBackgroundFigure from "@/assets/images/tabletBackgroundFigure.png";
import tabletBackgroundFruits from "@/assets/images/tabletBackgroundFruits.png";
import tabletLoginBackgroundLeaves from "@/assets/images/tabletLoginBackgroundLeaves.png";

export const StyledLoginPage = styled.div`
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  min-height: 100vh;

  background-image: url("${backgroundImg}"), url("${backgroundPliama}");

  @media (max-width: 960px) {
    background-position:
      bottom right -30%,
      top right,
      bottom right;
    background-size: 72%, 90%, 72%;

    background-repeat: no-repeat;

    min-height: 100vh;

    background-image: url("${tabletBackgroundFruits}"),
      url("${tabletLoginBackgroundLeaves}"), url("${tabletBackgroundFigure}");
  }

  /* ====================================@media (max-width: 564px)==================================== */

  @media (max-width: 564px) {
    background: none;
  }
`;
