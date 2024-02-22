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

const DiaryPage = () => {
  return (
    <StyledDiaryPage>
      <Header />
      <Container>
        <main className="content">
          <div className="leftContent">
            <DataPickerComponent />
            <AddNewProductForm />
            <ProductsTable />
            <AddNewProductMobileBtn />
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
