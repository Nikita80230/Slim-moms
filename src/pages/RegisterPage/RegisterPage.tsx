import { Container, Header, RegisterForm } from "@/components";

import { StyledRegisterPage } from "./Styled";

const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <Container>
        <Header />
        <RegisterForm />
      </Container>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
