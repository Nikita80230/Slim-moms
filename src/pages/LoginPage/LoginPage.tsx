import { LoginForm } from "@/components";
import { PageLayout } from "@/pages";

import { StyledLoginPage } from "./Styled";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <PageLayout>
        <main>
          <LoginForm />
        </main>
      </PageLayout>
    </StyledLoginPage>
  );
};

export default LoginPage;
