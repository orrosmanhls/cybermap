import React from "react";

import { Container } from "./styles";

interface Props {
  text: string;
}

const Example: React.FC<Props> = ({ text }) => {
  return <Container data-testid="example">{text}</Container>;
};

export default Example;
