import styled from "styled-components";

export const StyledModal = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(33, 33, 33, 0.12);

  z-index: 5;

  .modal {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    flex-direction: column;

    padding: 64px 82px;

    max-width: 672px;
    width: 100%;
    height: 574px;

    box-shadow: 0 22px 40px 0 rgba(0, 0, 0, 0.1);
    background: #fff;
  }

  .closeModalBtn {
    position: absolute;

    top: 15px;
    right: 15px;

    padding: 5px;

    border: none;

    background-color: transparent;
  }
  .closeModalImg {
    display: block;
  }

  .modalTitle {
    margin-bottom: 20px;
    padding: 0 20px;

    font-family: inherit;
    font-weight: 700;
    font-size: 26px;
    line-height: 140%;
    text-align: center;
    color: #212121;
  }
  .modalCaloriesAmount {
    max-width: 330px;
    width: 100%;

    margin: 0 auto 15px;
    padding-bottom: 32px;

    border-bottom: 1px solid #e0e0e0;

    font-family: inherit;
    font-weight: 700;
    font-size: 48px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #264061;
  }
  .modalCaloriesUnits {
    font-size: 16px;
  }
  .modalListTitle {
    margin-bottom: 20px;

    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #212121;
  }
  .modalList {
    margin-bottom: 45px;
    padding-left: 20px;

    list-style: decimal;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
  }
  .modalListItem:not(:last-child) {
    margin-bottom: 20px;
  }
  .modalRegisterLink {
    margin: 0 auto;

    text-decoration: none;
  }
  .modalRegisterBtn {
    width: 210px;
    height: 43px;
    box-shadow: 0 4px 10px 0 rgba(252, 132, 45, 0.5);
    background: #fc842d;

    border: none;
    border-radius: 30px;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #fff;
  }

  @media (max-width: 564px) {
    .modal {
      position: absolute;
      bottom: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      display: flex;
      flex-direction: column;

      padding: 64px 82px;

      max-width: 672px;
      width: 100%;
      height: 574px;

      box-shadow: 0 22px 40px 0 rgba(0, 0, 0, 0.1);
      background: #fff;
    }
  }
`;
