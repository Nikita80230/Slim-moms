import { CalculateCalorieForm, Container, Header } from "@/components";

import { StyledMainPage } from "./Styled";

const MainPage = () => {
  // const isModalOpened = true;

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
