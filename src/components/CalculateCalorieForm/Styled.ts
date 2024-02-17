import styled from "styled-components";

export const StyledCalculateCalorieForm = styled.div`
  max-width: 520px;
  width: 100%;

  .calculateCaloriesFormTitle {
    font-family: inherit;
    font-weight: 700;
    font-size: 34px;
    line-height: 140%;
    color: #212121;

    margin-bottom: 68px;
  }

  .calculateCaloriesForm {
    display: flex;
    flex-direction: column;
  }

  .calculateCaloriesFormInputs {
    display: flex;
    gap: 32px;

    margin-bottom: 60px;
  }

  .calculateCaloriesFormLeft {
    display: flex;
    flex-direction: column;

    max-width: 240px;
    width: 100%;
  }

  .labelText {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    text-transform: capitalize;
  }

  .calculateCaloriesFormRight {
    max-width: 240px;
    width: 100%;
  }

  .radioInputWrapper {
    display: flex;
    justify-content: space-between;

    color: #9b9faa;
  }

  .radioTitle {
    position: relative;

    display: block;

    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 9px;
    margin-bottom: 8px;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    text-transform: capitalize;
  }

  .calculateCalorieFormButton {
    display: flex;
    align-items: center;

    margin-left: auto;

    border: none;
    border-radius: 30px;
    padding: 13px 49px;
    max-width: 210px;
    width: 100%;
    height: 43px;

    box-shadow: 0 4px 10px 0 rgba(252, 132, 45, 0.5);
    background: #fc842d;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #fff;
  }

  /* ======================================@media (max-width: 768px)================================================= */
  @media (max-width: 768px) {
    .calculateCalorieFormButton {
      margin-left: 0;
      margin-right: auto;
    }
  }

  /* =====================================@media (max-width: 564px)===================================== */

  @media (max-width: 564px) {
    .calculateCaloriesFormTitle {
      margin-bottom: 68px;

      font-weight: 700;
      font-size: 18px;
      line-height: 140%;
      color: #212121;
    }

    .calculateCalorieFormButton {
      margin-left: auto;
      margin-right: auto;
    }

    .calculateCaloriesFormInputs {
      flex-direction: column;
      gap: 0;
    }

    .calculateCaloriesFormLeft {
      display: flex;
      flex-direction: column;

      max-width: unset;
      width: 100%;
    }

    .calculateCaloriesFormRight {
      max-width: unset;
      width: 100%;
    }
  }
`;
