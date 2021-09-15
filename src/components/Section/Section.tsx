import React from "react";

import { Container } from "./styles";

interface Props {}

const Section: React.FC<Props> = ({ children }) => {
  return <Container data-testid="section">{children}</Container>;
};

export default Section;
