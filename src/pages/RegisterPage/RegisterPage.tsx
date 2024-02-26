import { RegisterForm } from "@/components";
import { PageLayout } from "@/pages";

import { StyledRegisterPage } from "./Styled";

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
