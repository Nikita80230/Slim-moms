import { FC, ReactNode } from "react";

import { StyledPageLayout } from "./Styled";
import { Container, Header } from "@/components";

type Props = {
  children: ReactNode;
};

const PageLayout: FC<Props> = ({ children }) => {
  return (
    <StyledPageLayout>
      <Header />
      <Container>{children}</Container>
    </StyledPageLayout>
  );
};

export default PageLayout;
