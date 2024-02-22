import { AddNewProductMobileForm, Container, Header } from "@/components";

import { StyledMobileAddProductPage } from "./Styled";

const MobileAddProductPage = () => {
  return (
    <StyledMobileAddProductPage>
      <Header />
      <Container>
        <AddNewProductMobileForm />
      </Container>
    </StyledMobileAddProductPage>
  );
};

export default MobileAddProductPage;
