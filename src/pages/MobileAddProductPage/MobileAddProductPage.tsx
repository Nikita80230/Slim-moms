import { AddNewProductMobileForm, PageLayout } from "@/components";

import { StyledMobileAddProductPage } from "./Styled";

const MobileAddProductPage = () => {
  return (
    <PageLayout>
      <StyledMobileAddProductPage>
        <AddNewProductMobileForm />
      </StyledMobileAddProductPage>{" "}
    </PageLayout>
  );
};

export default MobileAddProductPage;
