import styled from "styled-components";

export const StyledCalculateCalorieForm = styled.div`
  max-width: 520px;
  width: 100%;

  /* .desiredWeight {
    margin-bottom: 20px;
  } */

  .calculateCaloriesFormTitle {
    font-family: var(--font-family);
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

    /* margin-top: 28px; */

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

  /* .radioTitle:after {
    content: "";
    height: 1px;
    width: 240px;

    position: absolute;
    left: 0;
    top: 33px;

    background-color: #e0e0e0;
  } */

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
`;
