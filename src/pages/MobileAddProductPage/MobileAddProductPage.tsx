import { AddNewProductMobileForm } from "@/components";
import { PageLayout } from "@/pages";

import { StyledMobileAddProductPage } from "./Styled";

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
