import styled from "styled-components";

export const StyledRadioGroup = styled.label<{ $disabled?: boolean }>`
  position: relative;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .fake {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    transform: translateY(-13%);
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 1px solid #e0e0e0;
    border-radius: 50%;
  }

  /* &:hover input ~ .fake {
    background-color: #ccc;
  }

  & input:checked ~ .fake {
    background-color: #2196f3;
  } */

  /* Create the indicator (the dot/circle - hidden when not checked) */
  .fake:after {
    content: "";
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  & input:checked ~ .fake:after {
    display: block;
    background: #fc842d;
  }
  & input:checked ~ .radioWrapperSpan {
    color: #fc842d;
  }

  /* Style the indicator (dot/circle) */
  & .fake:after {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    border-radius: 50%;
  }
  .radioWrapperSpan {
    padding-left: 25px;
  }
  .radioTitle {
    display: block;
    position: relative;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    text-transform: capitalize;
  }

  .radioTitle:after {
    content: "";
    height: 1px;
    width: 240px;

    position: absolute;
    left: 0;
    top: 33px;

    background-color: #e0e0e0;
  }

  .radioInput {
    display: flex;
    justify-content: space-between;

    color: #9b9faa;
  }
`;

export const StyledInputGroup = styled.label<{ $disabled?: boolean }>`
  position: relative;

  display: flex;
  flex-direction: column;

  margin-bottom: 30px;

  .placeholder {
    position: absolute;
    bottom: 8px;
    left: 0;

    transition: all 0.3s;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    text-transform: capitalize;

    pointer-events: none;

    &:focus,
    &:hover {
      color: #fc842d;
    }
  }

  .input {
    padding-bottom: 6px;

    outline: none;
    border: none;
    border-bottom: 1px solid #e0e0e0;

    transition: all 0.3s;

    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #9b9faa;
    text-transform: capitalize;

    &:focus,
    &:hover {
      border-bottom: 1px solid #fc842d;
    }

    &:not(:placeholder-shown) + .placeholder {
      transform: translateY(-20px);
      color: #fc842d;
      font-weight: 500;
      font-size: 12px;
    }
  }
`;
