import React from "react";

import { Container } from "./styles";

interface Props {
  text: string;
}

const BubbleChart: React.FC<Props> = ({ text }) => {
  return <Container data-testid="bubble-chart">{text}</Container>;
};

export default BubbleChart;
