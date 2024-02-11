import {
  AddNewProductForm,
  Container,
  Header,
  ProductsTable,
  UserDiarySection,
} from "@/components";

import { StyledDiaryPage } from "./Styled";
import DataPickerComponent from "@/components/DataPickerComponent/DataPickerComponent";

// import { RoutePath, TNavLink } from "@/types/routes/routes";

// const navLinks: TNavLink[] = [
//   {
//     navLinkName: "diary",
//     navRoute: RoutePath.DIARY,
//   },
//   {
//     navLinkName: "calculator",
//     navRoute: RoutePath.CALCULATOR,
//   },
// ];

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
            <UserDiarySection />
          </div>
        </main>
      </Container>
    </StyledDiaryPage>
  );
};

export default DiaryPage;
