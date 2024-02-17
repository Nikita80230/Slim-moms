import styled from "styled-components";

import backgroundGrey from "@/assets/images/backgroundGrey.png";
import Layer from "@/assets/images/Layer.png";

export const StyledDiaryPage = styled.div`
  background-image: url("${Layer}"), url("${backgroundGrey}");

  background-repeat: no-repeat;
  background-position:
    110% -10px,
    top right;
  background-size: 719px, 44%;

  /* ======for laptop=========== */
  /* background-position:
    165% -10px,
    top right;
  background-size: 706px, 44%; */

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
`;
