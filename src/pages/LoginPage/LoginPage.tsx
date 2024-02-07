import { Container, Header, LoginForm } from "@/components";

import { StyledLoginPage } from "./Styled";

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <Container>
        <Header />
        <LoginForm />
      </Container>
    </StyledLoginPage>
  );
};

export default LoginPage;
