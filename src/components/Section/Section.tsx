import React from "react";

import { Container } from "./styles";

interface Props {
  direction?: "row" | "column";
  justify?: "flex-start" | "flex-end" | "center";
  align?: "flex-start" | "flex-end" | "center";
}

const Section: React.FC<Props> = ({ children, direction, justify, align }) => {
  return (
    <Container
      data-testid="section"
      direction={direction}
      justify={justify}
      align={align}
    >
      {children}
    </Container>
  );
};

export default Section;
