import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Section from "../../../../components/Section/Section";
import { groupedCategories } from "../../../../data.json";
import { Subcategories, GroupedCategories, IOption } from "../../map.types";
import Category from "../../components/Category/Category";

// const categories = dataJSON.categories.map((category) => ({
//   name: category.category,
//   selected: true,
// }));

const categories: IOption[] = Object.keys(groupedCategories).map((key) => ({
  name: key,
  selected: false,
  value: (groupedCategories as GroupedCategories)[key],
}));

const fundingOptions = ["$0-$10M", "$10M-$30M", "$30M-$50M", "$50M+"].map(
  (item) => ({ name: item, selected: true })
);

const Home: React.FC = () => {
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [fundingFilters, setFundingFilters] = useState(fundingOptions);
  const [textFilter, setTextFilter] = useState<string>("");

  return (
    <>
      <Section direction={"column"}>
        <Header
          allCategories={categories}
          allFundings={fundingOptions}
          filteredCategories={filteredCategories}
          setFilteredCategories={setFilteredCategories}
          fundingFilters={fundingFilters}
          setFundingFilters={setFundingFilters}
          setTextFilter={setTextFilter}
        />
      </Section>
      {filteredCategories.length === 0
        ? categories.map((category) => (
            <Category
              key={category.name}
              name={category.name}
              value={category.value}
            />
          ))
        : filteredCategories.map((category) => (
            <Category
              key={category.name}
              name={category.name}
              value={category.value}
            />
          ))}
    </>
  );
};

export default Home;
