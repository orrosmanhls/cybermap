import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Section from "../../../../components/Section/Section";
import { useModal } from "../../../../contexts/ModalContext";
import dataJSON from "../../../../data.json";

const categories = dataJSON.categories.map((category) => ({
  name: category.category,
  selected: true,
}));
const fundingOptions = ["$0-$10M", "$10M-$30M", "$30M-$50M", "$50M+"].map(
  (item) => ({ name: item, selected: true })
);

const Home: React.FC = () => {
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [fundingFilters, setFundingFilters] = useState(fundingOptions);
  const [textFilter, setTextFilter] = useState<string>(null);

  return (
    <>
      <Section direction={"column"}>
        <Header
          filteredCategories={filteredCategories}
          setFilteredCategories={setFilteredCategories}
          fundingFilters={fundingFilters}
          setFundingFilters={setFundingFilters}
          textFilter={textFilter}
          setTextFilter={setTextFilter}
        />
      </Section>
      <Section direction={"column"}>
        <Header
          filteredCategories={filteredCategories}
          setFilteredCategories={setFilteredCategories}
          fundingFilters={fundingFilters}
          setFundingFilters={setFundingFilters}
          textFilter={textFilter}
          setTextFilter={setTextFilter}
        />
      </Section>
      <Section direction={"column"}>
        <Header
          filteredCategories={filteredCategories}
          setFilteredCategories={setFilteredCategories}
          fundingFilters={fundingFilters}
          setFundingFilters={setFundingFilters}
          textFilter={textFilter}
          setTextFilter={setTextFilter}
        />
      </Section>
      <Section direction={"column"}>
        <Header
          filteredCategories={filteredCategories}
          setFilteredCategories={setFilteredCategories}
          fundingFilters={fundingFilters}
          setFundingFilters={setFundingFilters}
          textFilter={textFilter}
          setTextFilter={setTextFilter}
        />
      </Section>
    </>
  );
};

export default Home;
