import styled from "styled-components";

export const StyledRecommendedFoodList = styled.div`
  margin: 0 auto 0 24%;

  .foodListTitle {
    margin-bottom: 37px;

    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #212121;
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
