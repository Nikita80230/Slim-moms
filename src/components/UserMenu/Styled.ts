import styled from "styled-components";

export const StyledUserMenu = styled.div`
  display: flex;
  align-items: end;

  margin-left: auto;

  .userName {
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
`;
