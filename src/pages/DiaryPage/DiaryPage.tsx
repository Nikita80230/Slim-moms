import {
  AddNewProductForm,
  Container,
  Header,
  ProductsTable,
  SummaryTable,
  // UserDiarySection,
} from "@/components";
import DataPickerComponent from "@/components/DataPickerComponent/DataPickerComponent";

import { StyledDiaryPage } from "./Styled";
import RecommendedFoodList from "@/components/RecomendedFoodList/RecommendedFoodList";

const DiaryPage = () => {
  return (
    <StyledDiaryPage>
      <Container>
        <Header />
        <main className="content">
          <div className="leftContent">
            <DataPickerComponent />
            <AddNewProductForm />
            <ProductsTable />
            {/* <UserDiarySection /> */}
          </div>
          <div className="rightContent">
            {/* <UserDiarySection /> */}
            <SummaryTable />
            <RecommendedFoodList />
          </div>
        </main>
      </Container>
    </StyledDiaryPage>
  );
};

export default DiaryPage;
