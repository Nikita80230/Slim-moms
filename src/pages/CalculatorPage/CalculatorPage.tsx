import { CalculateCalorieForm, SummaryTable } from "@/components";
import RecommendedFoodList from "@/components/RecommendedFoodList/RecommendedFoodList";
import { PageLayout } from "@/pages";

import { StyledCalculatorPage } from "./Styled";

const CalculatorPage = () => {
  return (
    <StyledCalculatorPage>
      <PageLayout>
        <main className="content">
          <div className="leftContent">
            <CalculateCalorieForm />
          </div>
          <div className="rightContent">
            {/* <UserDiarySection /> */}
            <SummaryTable />
            <RecommendedFoodList />
          </div>
        </main>
      </PageLayout>
    </StyledCalculatorPage>
  );
};

export default CalculatorPage;
