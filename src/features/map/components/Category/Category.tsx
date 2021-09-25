import React from "react";

import Subcategory from "../Subcategory/Subcategory";
import { ISubcategory } from "../../map.types";

interface Props {
  name: string;
  subcategories: ISubcategory[];
}

const Category: React.FC<Props> = ({ name, subcategories }) => {
  // const subcategoriesKeys = Object.keys(subcategories);

  return (
    <>
      {subcategories.map((subcategory: ISubcategory) => (
        <Subcategory
          key={subcategory.name}
          name={subcategory.name}
          categoryName={name}
          companies={subcategory.companies}
        />
      ))}
    </>
  );
};

export default Category;
