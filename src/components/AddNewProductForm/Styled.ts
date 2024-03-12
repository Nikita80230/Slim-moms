import styled from "styled-components";

export const StyledAddNewProductForm = styled.form`
  display: flex;
  align-items: baseline;
  margin-bottom: 30px;

  .inputsWrapper {
    display: flex;
    align-items: center;
    /* gap: 18px; */
    margin-right: auto;
  }

  .productName {
    width: 240px;
    /* width: 100%; */
    margin-bottom: 0;
    margin-right: 48px;
  }
  .productWeight {
    width: 105px;
    /* width: 100%; */
    margin-bottom: 0;
  }

  .addProductBtn {
    display: flex;

    padding: 20px;
    border: none;
    border-radius: 50%;

    background-color: #fc842d;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

  /* =============selector-styles=============== */

  .select__indicator,
  .select__indicator-separator {
    display: none;
  }

  .select__input-container,
  .select__single-value,
  .select__placeholder {
    color: #9b9faa;
  }
  .select__control {
    border-color: #e0e0e0b5;
    border-radius: unset;
    border-style: unset;
    border-bottom-style: solid;
    border-width: 1px;
    transition: all 0.3s;

    min-height: 28px;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    background-color: transparent;
  }
  .select__control:hover {
    border-color: #fc842d;
  }

  @media (max-width: 564px) {
    display: none;
  }
`;
