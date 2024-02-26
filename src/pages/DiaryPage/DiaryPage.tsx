import {
  AddNewProductForm,
  AddNewProductMobileBtn,
  DataPickerComponent,
  ProductsTable,
  RecommendedFoodList,
  SummaryTable,
} from "@/components";
import { PageLayout } from "@/pages";

import { StyledDiaryPage } from "./Styled";

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
