import { CalculateCalorieForm, Container, Header } from "@/components";

import { StyledMainPage } from "./Styled";
import PageLayout from "../PageLayout/PageLayout";

const MainPage = () => {
  // const isModalOpened = true;

  return (
    <StyledMainPage>
      <PageLayout>
        <main>
          <CalculateCalorieForm />
        </main>
      </PageLayout>
    </StyledMainPage>
  );
};

export default MainPage;
