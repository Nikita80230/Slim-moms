import styled from "styled-components";

import backgroundPliama from "@/assets/images/background-pliama.png";
import backgroundImg from "@/assets/images/Group4.png";
import tabletBackgroundFigure from "@/assets/images/tabletBackgroundFigure.png";
import tabletBackgroundFruits from "@/assets/images/tabletBackgroundFruits.png";
import tabletBackgroundLeaves from "@/assets/images/tabletBackgroundLeaves.png";

export const StyledMainPage = styled.div`
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  min-height: 100vh;

  background-image: url("${backgroundImg}"), url("${backgroundPliama}");

  /* ============================================@media (max-width: 960px)====================================================== */

  @media (max-width: 960px) {
    background-position:
      bottom right,
      bottom center,
      bottom right;
    background-size: 65%, 80%, 72%;

    background-repeat: no-repeat;

    min-height: 100vh;

    background-image: url("${tabletBackgroundFruits}"),
      url("${tabletBackgroundLeaves}"), url("${tabletBackgroundFigure}");
  }

  @media (max-width: 960px) {
    background-position:
      bottom right,
      bottom center,
      bottom right;
    background-size: 65%, 80%, 72%;

    background-repeat: no-repeat;

    min-height: 100vh;

    background-image: url("${tabletBackgroundFruits}"),
      url("${tabletBackgroundLeaves}"), url("${tabletBackgroundFigure}");
  }

  /* ====================================@media (max-width: 564px)==================================== */

  @media (max-width: 564px) {
    background: none;
  }
`;
