import {
  CalculateCalorieForm,
  Container,
  Header,
  SummaryTable,
} from "@/components";

import { StyledCalculatorPage } from "./Styled";
import RecommendedFoodList from "@/components/RecomendedFoodList/RecommendedFoodList";

const CalculatorPage = () => {
  return (
    <StyledCalculatorPage>
      <Container>
        <Header />
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
      </Container>
    </StyledCalculatorPage>
  );
};

export default CalculatorPage;
