import React from "react";

import { Container } from "./styles";

interface Props {
  text: string;
}

const DisplaySwitch: React.FC<Props> = ({ text }) => {
  return <Container data-testid="display-switch">{text}</Container>;
};

export default DisplaySwitch;
