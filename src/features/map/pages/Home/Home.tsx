import React, { useState } from "react";

import Header from "../../components/Header/Header";
import Section from "../../../../components/Section/Section";
import { useModal } from "../../../../contexts/ModalContext";

const Home: React.FC = () => {
  const [categoriesFilter, setCategoriesFilter] = useState(null);
  const [fundingFilter, setFundingFilter] = useState(null);
  const [textFilter, setTextFilter] = useState(null);

  return (
    <>
      {console.log(useModal().modalType)}
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
