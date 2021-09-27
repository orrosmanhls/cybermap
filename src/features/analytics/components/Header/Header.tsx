import React from "react";

import { Container } from "./styles";

interface Props {}

const Header: React.FC<Props> = () => {
  return <Container data-testid="header"></Container>;
};

export default Header;
