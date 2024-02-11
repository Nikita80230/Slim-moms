import styled from "styled-components";

export const StyledAddNewProductForm = styled.form`
  display: flex;
  align-items: baseline;
  margin-bottom: 30px;

  .inputsWrapper {
    display: flex;
    align-items: center;
    /* gap: 18px; */
    margin-right: 87px;
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
`;
