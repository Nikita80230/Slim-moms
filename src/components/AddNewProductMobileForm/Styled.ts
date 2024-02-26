import styled from "styled-components";

export const StyledAddNewProductMobileForm = styled.div`
  position: relative;

  padding-top: 80px;

  .addProductCloseBtn {
    position: absolute;
    top: -130px;
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
`;
