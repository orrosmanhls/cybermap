import React from "react";

import Subcategory from "../Subcategory/Subcategory";
import { ISubcategory } from "../../map.types";

interface Props {
  name: string;
  subcategories: ISubcategory[];
  isBox: boolean;
}

const Category: React.FC<Props> = ({ name, subcategories, isBox }) => {
  const sortedSubcategories = subcategories.sort(
    (a: ISubcategory, b: ISubcategory) => {
      if (a.name === "none") return -1;
      if (b.name === "none") return 1;
      return a.name.localeCompare(b.name);
    }
  );

  return (
    <>
      {sortedSubcategories.map((subcategory: ISubcategory) => (
        <Subcategory
          key={subcategory.name}
          name={subcategory.name}
          categoryName={name}
          companies={subcategory.companies}
          isBox={isBox}
        />
      ))}
    </>
  );
};

export default Category;
