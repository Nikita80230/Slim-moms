import styled from "styled-components";

export const StyledDiaryPage = styled.div`
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

    flex-direction: column;
    max-width: 517px;
    width: 100%;

    padding-left: 9vw;
  }

  /* ========================================@media (max-width: 960px)============================================ */

  @media (max-width: 960px) {
    .content {
      flex-direction: column;
      align-items: center;
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
  /* ======================================@media (max-width: 564px)========================================== */
  @media (max-width: 564px) {
    .rightContent {
      flex-direction: column;
    }
  }
`;
