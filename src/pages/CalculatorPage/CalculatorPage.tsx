import {
  CalculateCalorieForm,
  PageLayout,
  RecommendedFoodList,
  SummaryTable,
} from "@/components";

import { StyledCalculatorPage } from "./Styled";

const CalculatorPage = () => {
  return (
    <PageLayout isSpecialBg>
      <StyledCalculatorPage>
        <div className="content">
          <div className="leftContent">
            <CalculateCalorieForm />
          </div>
          <div className="rightContent">
            <SummaryTable />
            <RecommendedFoodList />
          </div>
        </div>
      </StyledCalculatorPage>
    </PageLayout>
  );
};

export default CalculatorPage;
