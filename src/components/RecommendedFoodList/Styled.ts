import styled from "styled-components";

export const StyledRecommendedFoodList = styled.div`
  /* margin: 0 auto 0 24%; */

  .foodListTitle {
    margin-bottom: 37px;

    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #212121;
  }

  .foodList {
    max-height: 120px;

    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      height: 30%;
      border-radius: 2px;
      background: #264061;
    }
  }

  .listItem:not(:last-child) {
    margin-bottom: 20px;
  }
  .listItem {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }
`;
