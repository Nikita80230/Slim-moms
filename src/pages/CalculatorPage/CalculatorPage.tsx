import {
  CalculateCalorieForm,
  Container,
  Header,
  SummaryTable,
} from "@/components";
import RecommendedFoodList from "@/components/RecommendedFoodList/RecommendedFoodList";

import { StyledCalculatorPage } from "./Styled";
import PageLayout from "../PageLayout/PageLayout";

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
