import { CalculateCalorieForm, PageLayout } from "@/components";

import { StyledMainPage } from "./Styled";

const MainPage = () => {
  // const isModalOpened = true;

  return (
    <PageLayout>
      <StyledMainPage>
        <CalculateCalorieForm />
      </StyledMainPage>
    </PageLayout>
  );
};

export default MainPage;
