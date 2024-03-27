import styled from "styled-components";

export const StyledDataPickerComponent = styled.div`
  display: inline-flex;
  align-items: center;
  margin-bottom: 30px;

  .newProductDate {
    max-width: 250px;
    height: 44px;

    /* padding: 15px 5px 15px 28px; */
    margin-right: 20px;

    border: none;
    background: transparent;

    font-family: inherit;
    /* letter-spacing: 0.48px; */
    font-weight: 700;
    font-size: 34px;
    color: #212121;
  }
  .customDateInput {
    border: none;
    background: transparent;

    /* margin-right: 20px; */
    padding: 0;

    font-family: inherit;
    font-weight: 700;
    font-size: 34px;
    color: #212121;
  }

  .dateImg {
    margin-left: 20px;
  }

  @media (max-width: 564px) {
    justify-content: center;
  }
`;
