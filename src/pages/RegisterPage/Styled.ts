import styled from "styled-components";

import backgroundPliama from "@/assets/images/background-pliama.png";
import backgroundImg from "@/assets/images/Group4.png";

export const StyledRegisterPage = styled.div`
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;

  min-height: 100vh;

  background-image: url("${backgroundImg}"), url("${backgroundPliama}");
`;
