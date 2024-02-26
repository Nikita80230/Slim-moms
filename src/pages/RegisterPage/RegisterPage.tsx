import { RegisterForm } from "@/components";

import { StyledRegisterPage } from "./Styled";
import PageLayout from "../PageLayout/PageLayout";

const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <PageLayout>
        <main>
          <RegisterForm />
        </main>
      </PageLayout>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
