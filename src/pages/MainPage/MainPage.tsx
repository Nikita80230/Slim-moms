import { CalculateCalorieForm } from "@/components";
import { PageLayout } from "@/pages";

import { StyledMainPage } from "./Styled";

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
