import { AddNewProductMobileForm } from "@/components";

import { StyledMobileAddProductPage } from "./Styled";
import PageLayout from "../PageLayout/PageLayout";

const MobileAddProductPage = () => {
  return (
    <StyledMobileAddProductPage>
      <PageLayout>
        <main>
          <AddNewProductMobileForm />
        </main>
      </PageLayout>
    </StyledMobileAddProductPage>
  );
};

export default MobileAddProductPage;
