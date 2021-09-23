import React from "react";

import Section from "../../../../components/Section/Section";
import { Subcategories } from "../../map.types";
import { Container } from "./styles";

interface Props {
  name: string;
  value: Subcategories;
}

const Category: React.FC<Props> = ({ name, value }) => {
  return (
    <Section data-testid="category">
      <h1>{name}</h1>
    </Section>
  );
};

export default Category;
