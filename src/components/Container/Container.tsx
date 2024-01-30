import {
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  //   HTMLProps,
  ReactNode,
} from "react";

import { StyledContainer } from "./Styled";

// interface Props extends HTMLProps<HTMLDivElement> {
//   children: ReactNode;
// }
interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
}

const Container: FC<Props> = ({ children, ...restProps }) => {
  return <StyledContainer {...restProps}>{children}</StyledContainer>;
};

export default Container;
