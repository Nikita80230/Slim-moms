import styled from "styled-components";

export const StyledAddNewProductMobileForm = styled.div`
  position: relative;

  padding-top: 80px;

  .addProductCloseBtn {
    z-index: 3;
    position: absolute;
    top: -68px;
    left: 0;

    padding: 15px;

    border: none;
    background: transparent;
  }

  .addProductForm {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .formInputs {
    width: 100%;
    margin-bottom: 60px;
  }

  .formInput:not(:last-child) {
    margin-bottom: 25px;
  }

  .addProductBtn {
    padding: 13px 48px;
    max-width: 176px;
    width: 100%;
    min-height: 44px;

    border: none;
    border-radius: 30px;
    box-shadow: 0 4px 10px 0 rgba(252, 132, 45, 0.5);
    background: #fc842d;

    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #fff;

    @media (max-width: 370px) {
      padding: 13px 34px;
    }
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
`;
