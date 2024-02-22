import styled from "styled-components";

export const StyledUserMenuPanel = styled.div`
  display: flex;
  align-items: end;

  margin-left: auto;

  .tablet_desktopUserMenu {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
  }

  .mobileBurgerMenuBtn {
    display: none;
  }

  .userName {
    display: flex;
    align-items: center;
    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    text-align: right;
    color: #212121;
  }
  .divider {
    width: 1px;
    height: 32px;

    margin: 0 20px;

    transform: translateY(8px);

    background-color: #9b9faa;
  }

  .exitBtn {
    border: none;

    padding: 0;

    font-family: inherit;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    background-color: transparent;
  }

  @media (max-width: 960px) {
    align-items: center;

    .divider {
      transform: translateY(8px);
    }
  }

  @media (max-width: 768px) {
    .tablet_desktopUserMenu {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-right: 45px;
    }
    .mobileBurgerMenuBtn {
      display: flex;

      padding: 10px;

      background-color: transparent;
      border: none;
    }

    .divider {
      transform: translateY(0px);
    }
  }
  @media (max-width: 564px) {
    .mobileBurgerMenuBtn {
      display: flex;

      padding: 10px;

      background-color: transparent;
      border: none;
    }

    .tablet_desktopUserMenu {
      margin-right: 0;
    }
  }
`;
