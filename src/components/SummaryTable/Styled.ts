import styled from "styled-components";

export const StyledSummaryTable = styled.div`
  max-width: 270px;
  width: 100%;
  /* margin: 0 auto 0 125px; */
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;

  .summaryTitle {
    margin-bottom: 40px;

    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #212121;
  }
  .table {
    display: flex;
    justify-content: space-between;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }
  .propertyCol {
  }
  .valueCol {
    display: flex;

    align-items: flex-end;
    flex-direction: column;
  }
  .property:not(:last-child) {
    padding-bottom: 20px;
  }
  .value:not(:last-child) {
    padding-bottom: 20px;
  }
`;
