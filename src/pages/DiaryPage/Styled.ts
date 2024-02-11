import styled from "styled-components";

import backgroundGrey from "@/assets/images/backgroundGrey.png";
import Layer from "@/assets/images/Layer.png";

export const StyledDiaryPage = styled.div`
  background-image: url("${Layer}"), url("${backgroundGrey}");

  background-repeat: no-repeat;
  background-position:
    135% 0,
    top right;
  background-size: 719px, 44%;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .leftContent {
    display: flex;
    flex-direction: column;
  }
`;
