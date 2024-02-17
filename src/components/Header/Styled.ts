import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  margin-bottom: 100px;

  .header {
    display: flex;
    align-items: flex-end;

    width: 100%;
  }

  .logo {
    position: relative;
    padding-right: 20px;
    margin-right: 20px;
  }

  .logo:after {
    content: "";
    height: 50%;
    width: 2px;

    stroke-width: 2px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);

    position: absolute;
    right: 0;
    top: 35px;

    background-color: #e0e0e0;
  }

  .navigation {
    display: flex;
    align-items: flex-end;
    gap: 24px;

    width: 100%;

    padding-bottom: 5px;
  }

  .headerLink {
    color: #9b9faa;

    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.56px;
    text-transform: uppercase;
    text-decoration: none;
  }

  /* ===================================================max-width: 768px===================================================== */

  @media (max-width: 768px) {
    margin-bottom: 75px;
    position: relative;

    .header {
      display: flex;
      align-items: center;

      width: 100%;

      padding-bottom: 16px;
    }

    .header::after {
      content: "";
      width: 100vw;
      height: 2px;
      position: absolute;
      left: -32px;
      bottom: 0;
      background-color: #e0e0e0;
    }

    .logo {
      display: block;
      padding-right: 0;
      margin-right: auto;
    }

    .logo:after {
      content: "";
      width: 0;
    }

    .navigation {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 14px;

      width: 100%;

      padding-bottom: 5px;
    }

    .headerLink {
      color: #9b9faa;

      font-family: inherit;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      text-align: right;
      color: #9b9faa;
    }
  }
  @media (max-width: 564px) {
    margin-bottom: 50px;

    .header::after {
      content: "";
      width: 100vw;
      height: 2px;
      position: absolute;
      left: -20px;
      bottom: 0;
      background-color: #e0e0e0;
    }
  }
`;
