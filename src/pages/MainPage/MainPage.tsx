import { CalculateCalorieForm, PageLayout } from "@/components";

import { StyledMainPage } from "./Styled";

const MainPage = () => {
  return (
    <PageLayout>
      <StyledMainPage>
        <CalculateCalorieForm />
      </StyledMainPage>
    </PageLayout>
  );
};

export default MainPage;
