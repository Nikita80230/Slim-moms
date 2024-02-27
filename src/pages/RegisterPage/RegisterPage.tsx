import { PageLayout, RegisterForm } from "@/components";

import { StyledRegisterPage } from "./Styled";

const RegisterPage = () => {
  return (
    <PageLayout>
      <StyledRegisterPage>
        <RegisterForm />
      </StyledRegisterPage>{" "}
    </PageLayout>
  );
};

export default RegisterPage;
