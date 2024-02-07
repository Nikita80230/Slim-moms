import styled from "styled-components";

export const StyledAuthForm = styled.div`
  max-width: 400px;
  width: 100%;
  min-height: 300px;

  .authTitle {
    margin-bottom: 55px;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #fc842d;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    display: flex;
    flex-direction: column;

    margin-bottom: 40px;
  }

  .labelText {
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    text-transform: capitalize;
  }

  label > input {
    border: none;
    border-bottom: 1px solid #e0e0e0;
  }
`;

export const StyledBtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  button {
    border: none;
    border-radius: 16px;
    width: 100%;
    max-width: 136px;
    height: 44px;
    color: ${(props) => props.theme.colors.dark};
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;
  }
  button {
    padding: 13px 48px;
    max-width: 181px;
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
  }
  .register {
    border: 3px solid #fc842d;
    padding: 13px 34px;
    background: #fff;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    text-align: center;
    color: #fc842d;
  }
`;
