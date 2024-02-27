import styled from "styled-components";

import backgroundPliama from "@/assets/images/background-pliama.png";
import backgroundGrey from "@/assets/images/backgroundGrey.png";
import backgroundImg from "@/assets/images/Group4.png";
import tabletBackgroundFigure from "@/assets/images/tabletBackgroundFigure.png";
import tabletBackgroundFruits from "@/assets/images/tabletBackgroundFruits.png";
import tabletBackgroundGreyDiaryCalculator from "@/assets/images/tabletBackgroundGreyDiaryCalculator.png";
import tabletDiaryCalculatorLeaves from "@/assets/images/tabletDiaryCalculatorLeaves.png";
import tabletLoginBackgroundLeaves from "@/assets/images/tabletLoginBackgroundLeaves.png";

export const StyledPageLayout = styled.div`
  main {
    padding-top: 148px;
  }

  .generalBackground {
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
  }

  .specialBackground {
    background-position:
      top right -68%,
      top right -52%;
    background-size:
      70%,
      62% 100%;

    background-repeat: no-repeat;

    min-height: 100vh;

    background-image: url("${tabletLoginBackgroundLeaves}"),
      url("${backgroundGrey}");

    @media (max-width: 1024px) {
      background-position:
        top right -68%,
        top right -58%;
      background-size: 70%, 62%;
    }
    @media (max-width: 960px) {
      background-position:
        bottom right,
        bottom left;
      background-size:
        40% 36%,
        100% 35%;

      background-repeat: no-repeat;

      min-height: 100vh;

      background-image: url("${tabletDiaryCalculatorLeaves}"),
        url("${tabletBackgroundGreyDiaryCalculator}");
    }

    @media (max-width: 564px) {
      background-image: url("${backgroundGrey}");
      background-position: bottom left;
      background-size: 100% 46%;
    }
  }
`;
