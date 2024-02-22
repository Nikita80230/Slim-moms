import styled from "styled-components";

export const StyledModalNavMenu = styled.div`
  position: fixed;

  top: 82px;
  left: 0;

  height: calc(100vh - 82px);
  width: 100vw;

  background: #264061;

  z-index: 5;

  .modalNavMenu {
    position: absolute;
    top: 0;
    /* left: 50%; */
    /* transform: translate(-50%, -50%); */

    display: flex;
    flex-direction: column;

    padding: 64px 82px;

    /* max-width: 672px; */
    width: 100%;
    height: 574px;

    /* box-shadow: 0 22px 40px 0 rgba(0, 0, 0, 0.1); */

    & .link {
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 0.04em;
      text-decoration: none;
      text-transform: uppercase;
      text-align: center;
      color: #fff;
    }
    & .link:not(:last-child) {
      margin-bottom: 30px;
    }
    & .link.active {
      color: #9b9faa;
    }
  }
`;
