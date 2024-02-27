import { FC, ReactNode } from "react";

import { Container, Header } from "@/components";

import { StyledPageLayout } from "./Styled";

type Props = {
  children: ReactNode;
  isSpecialBg?: boolean;
};

const PageLayout: FC<Props> = ({ children, isSpecialBg = false }) => {
  return (
    <StyledPageLayout>
      <Header />
      <main className={isSpecialBg ? "specialBackground" : "generalBackground"}>
        <Container>{children}</Container>
      </main>
    </StyledPageLayout>
  );
};

export default PageLayout;
