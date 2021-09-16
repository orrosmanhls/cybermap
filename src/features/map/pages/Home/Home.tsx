import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Section from "../../../../components/Section/Section";
import dataJSON from "../../../../data.json";

const Home: React.FC = () => {
  const [categoriesFilter, setCategoriesFilter] = useState(null);
  const [fundingFilter, setFundingFilter] = useState(null);
  const [textFilter, setTextFilter] = useState(null);

  return (
    <>
      <Section direction={"column"}>
        <Header />
      </Section>
      <Section direction={"column"}>
        <Header />
      </Section>
      <Section direction={"column"}>
        <Header />
      </Section>
      <Section direction={"column"}>
        <Header />
      </Section>
    </>
  );
};

export default Home;
