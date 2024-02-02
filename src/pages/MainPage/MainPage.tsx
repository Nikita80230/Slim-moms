import { CalculateCalorieForm, Container, Header } from "@/components";

import { StyledMainPage } from "./Styled";

const MainPage = () => {
  return (
    <StyledMainPage>
      <Container>
        <Header />
        <CalculateCalorieForm />
      </Container>
    </StyledMainPage>
  );
};

export default MainPage;
