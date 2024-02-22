import { Container, Header, RegisterForm } from "@/components";

import { StyledRegisterPage } from "./Styled";

const RegisterPage = () => {
  return (
    <StyledRegisterPage>
      <Header />
      <Container>
        <RegisterForm />
      </Container>
    </StyledRegisterPage>
  );
};

export default RegisterPage;
