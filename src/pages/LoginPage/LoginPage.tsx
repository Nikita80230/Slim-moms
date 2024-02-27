import { LoginForm, PageLayout } from "@/components";

import { StyledLoginPage } from "./Styled";

const LoginPage = () => {
  return (
    <PageLayout>
      <StyledLoginPage>
        <LoginForm />
      </StyledLoginPage>
    </PageLayout>
  );
};

export default LoginPage;
