import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Section from "../../../../components/Section/Section";
import { categoriesArray } from "../../../../data.json";
import { ICategory } from "../../map.types";
import Category from "../../components/Category/Category";

export const fundingOptions = [
  "$0-$10M",
  "$10M-$30M",
  "$30M-$50M",
  "$50M+",
].map((item) => ({ name: item, selected: false }));

const Home: React.FC = () => {
  const [filteredCategories, setFilteredCategories] =
    useState<ICategory[]>(categoriesArray);
  const [isBox, setIsBox] = useState(false);

  return (
    <>
      <Section direction={"column"}>
        <Header
          filteredCategories={filteredCategories}
          allFundings={fundingOptions}
          setFilteredCategories={setFilteredCategories}
          isBox={isBox}
          setIsBox={setIsBox}
        />
      </Section>
      {filteredCategories.map((category) => (
        <Category
          key={category.name}
          name={category.name}
          subcategories={category.subcategories}
          isBox={isBox}
        />
      ))}
    </>
  );
};

export default Home;
