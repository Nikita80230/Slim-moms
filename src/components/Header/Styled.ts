import styled from "styled-components";

export const StyledHeader = styled.header`
  margin-bottom: 100px;

  .header {
    display: flex;
    align-items: flex-end;
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
    // align-items: flex-end;
    gap: 24px;

    padding-bottom: 5px;
  }

  .headerLink {
    color: #9b9faa;

    font-family: Verdana;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.56px;
    text-transform: uppercase;
    text-decoration: none;
  }
`;
