import React from "react";

import { Container } from "./styles";

interface Props {
  title: string;
  options: option[];
  onClick: Function;
}
interface option {
  name: string;
  selected: boolean;
}

const Dropdown: React.FC<Props> = ({ title, options, onClick }) => {
  return <Container data-testid="dropdown">{title}</Container>;
};

export default Dropdown;
