import React from "react";

import Section from "../../../../components/Section/Section";
import Subcategory from "../Subcategory/Subcategory";
import { Subcategories } from "../../map.types";
import { Container } from "./styles";

interface Props {
  name: string;
  subcategories: Subcategories;
}

const Category: React.FC<Props> = ({ name, subcategories }) => {
  const subcategoriesKeys = Object.keys(subcategories);

  return (
    <>
      {subcategoriesKeys.map((subcategoryKey) => (
        <Subcategory
          key={subcategoryKey}
          name={subcategoryKey}
          categoryName={name}
          companies={subcategories[subcategoryKey].companies}
        />
      ))}
    </>
  );
};

export default Category;
