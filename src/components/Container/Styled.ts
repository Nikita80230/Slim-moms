import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 1280px;
  width: 100%;

  padding-left: 16px;
  padding-right: 16px;

  margin: 0 auto;

  @media (max-width: 960px) {
    max-width: 960px;
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    max-width: 768px;
  }

  @media (max-width: 564px) {
    max-width: 564px;
    padding: 0 20px;
  }
`;
