import styled from "styled-components";

import backgroundGrey from "@/assets/images/backgroundGrey.png";
import tabletBackgroundGreyDiaryCalculator from "@/assets/images/tabletBackgroundGreyDiaryCalculator.png";
import tabletDiaryCalculatorLeaves from "@/assets/images/tabletDiaryCalculatorLeaves.png";
import tabletLoginBackgroundLeaves from "@/assets/images/tabletLoginBackgroundLeaves.png";

export const StyledCalculatorPage = styled.div`
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

  .content {
    display: flex;
    justify-content: space-between;

    /* gap: 130px; */
  }

  .leftContent {
    display: flex;
    flex-direction: column;
    max-width: 623px;
    width: 100%;
  }
  .rightContent {
    display: flex;
    /* align-items: center; */
    flex-direction: column;
    max-width: 517px;
    width: 100%;

    padding-left: 9vw;
  }

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

    .content {
      flex-direction: column;
      align-items: center;
      /* gap: 135px; */
    }

    .leftContent {
      padding-bottom: 55px;
      margin: 0;
    }

    .rightContent {
      flex-direction: row;
      gap: 100px;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 48px;
      padding-top: 80px;
    }
  }

  @media (max-width: 564px) {
    @media (max-width: 564px) {
      background-image: url("${backgroundGrey}");
      background-position: bottom left;
      background-size: 100% 46%;

      .rightContent {
        flex-direction: column;
      }
    }
  }
`;
