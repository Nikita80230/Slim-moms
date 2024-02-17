import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  min-height: 100vh;

  padding-left: 16px;
  padding-right: 16px;
  padding-top: 3vh;
  padding-bottom: 3vh;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 768px;
    padding: 20px 32px;
  }

  @media (max-width: 564px) {
    max-width: 564px;
    padding: 20px 20px;
  }
`;
