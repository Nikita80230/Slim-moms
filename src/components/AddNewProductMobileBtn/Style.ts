import styled from "styled-components";

export const StyledAddNewProductMobileBtn = styled.div`
  display: none;
  @media (max-width: 564px) {
    display: flex;
    justify-content: center;

    padding-top: 50px;

    .addProductBtn {
      display: flex;

      padding: 20px;
      border: none;
      border-radius: 50%;

      background-color: #fc842d;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    }
  }
`;
