import styled from "styled-components";

export const StyledProductsTable = styled.div`
  width: 100%;

  .table {
    display: flex;
  }

  .tableBody {
    display: flex;
    flex-direction: column;

    width: 100%;
    max-height: 300px;
    height: 100%;

    /* border: 2px solid grey; */

    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    &::-webkit-scrollbar-thumb {
      height: 30%;
      border-radius: 2px;
      background: #264061;
    }
  }

  .tableBodyRow {
    display: flex;
    /* gap: 32px; */
  }
  .tableBodyBox {
    display: flex;
    align-items: center;

    width: 100%;
    height: 52px;

    border-bottom: 2px solid #e0e0e0;

    text-align: start;
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: 0.04em;
    color: #212121;

    &.productName {
      max-width: 240px;
      margin-right: 48px;
    }
    &.productWeight {
      max-width: 107px;
      margin-right: 32px;
    }
    &.productKcal {
      max-width: 106px;
    }
    &.removeProductBtn {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 74px;
      padding: 15px 10px;

      border: none;
    }
    & > button {
      display: flex;
      justify-content: center;
      align-items: center;

      padding: 0;

      border: none;
      border-radius: 5px;

      background: transparent;
    }
  }
`;
