import React from "react";

import { Container } from "./styles";

interface Props {
  text: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const MenuItem: React.FC<Props> = ({ text, onClick }) => {
  return (
    <Container data-testid="menu-item" onClick={onClick}>
      {text}
    </Container>
  );
};

export default MenuItem;
