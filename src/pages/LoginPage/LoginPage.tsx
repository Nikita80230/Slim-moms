import { Container, Header, LoginForm } from "@/components";

import { StyledLoginPage } from "./Styled";
import PageLayout from "../PageLayout/PageLayout";

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
