import {
  AddNewProductForm,
  AddNewProductMobileBtn,
  DataPickerComponent,
  PageLayout,
  ProductsTable,
  RecommendedFoodList,
  SummaryTable,
} from "@/components";

import { StyledDiaryPage } from "./Styled";

const DiaryPage = () => {
  return (
    <PageLayout isSpecialBg>
      <StyledDiaryPage>
        <div className="content">
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
        </div>
      </StyledDiaryPage>
    </PageLayout>
  );
};

export default DiaryPage;
