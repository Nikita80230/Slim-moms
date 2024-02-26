import {
  AddNewProductForm,
  AddNewProductMobileBtn,
  Container,
  DataPickerComponent,
  Header,
  ProductsTable,
  RecommendedFoodList,
  SummaryTable,
  // UserDiarySection,
} from "@/components";

import { StyledDiaryPage } from "./Styled";
import PageLayout from "../PageLayout/PageLayout";

const DiaryPage = () => {
  return (
    <StyledDiaryPage>
      <PageLayout>
        <main className="content">
          <div className="leftContent">
            <DataPickerComponent />
            <AddNewProductForm />
            <ProductsTable />
            <AddNewProductMobileBtn />
          </div>
          <div className="rightContent">
            <SummaryTable />
            <RecommendedFoodList />
          </div>
        </main>
      </PageLayout>
    </StyledDiaryPage>
  );
};

export default DiaryPage;
