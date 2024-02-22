import { Container, Header, LoginForm } from "@/components";

import { StyledLoginPage } from "./Styled";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Header />
      <Container>
        <LoginForm />
      </Container>
    </StyledLoginPage>
  );
};

export default LoginPage;
