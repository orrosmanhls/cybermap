import React from "react";

import logo from "../../assets/logo.png";
import { Img, StyledLogo } from "./styles";

interface Props {
  isMobile?: boolean;
}

const Logo: React.FC<Props> = ({ isMobile }) => {
  return (
    <StyledLogo to="/" $isMobile={isMobile}>
      <Img data-testid="logo" src={logo}></Img>
    </StyledLogo>
  );
};

export default Logo;
