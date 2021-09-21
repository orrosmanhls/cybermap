import React, { useState } from "react";

import { Container, Title, FiltersContainer, SubTitle } from "./styles";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import dataJSON from "../../../../data.json";
import { useModalUpdate, useModal } from "../../../../contexts/ModalContext";

const categories = dataJSON.categories.map((category) => ({
  name: category.category,
  selected: true,
}));
const fundingOptions = ["$0-$10M", "$10M-$30M", "$30M-$50M", "$50M+"].map(
  (item) => ({ name: item, selected: true })
);

interface Props {}

const Header: React.FC<Props> = () => {
  const [filteredCategories, setFilteredCategories] = useState(categories);
  const [fundingFilters, setFundingFilters] = useState(fundingOptions);
  const [openDropdown, setOpenDropdown] = useState(null);

  const { toggleModal, updateModalType } = useModalUpdate();
  const { modalType } = useModal();

  const openModal = (companyName: string) => {
    updateModalType({
      type: "company",
      company: companyName,
    });
    toggleModal();
  };
  return (
    <Container data-testid="header">
      <Title component={"h1"}>Welcome to CyberMap</Title>
      <SubTitle>
        CyberMap by YL Ventures is the first open, interactive, comprehensive,
        live map of Israel’s cybersecurity startup landscape.
      </SubTitle>
      {/* Category Filters */}
      <FiltersContainer>
        <Dropdown
          title={"Categories"}
          options={filteredCategories}
          setOptions={setFilteredCategories}
        />

        <button
          onClick={() => {
            openModal("1touch.io");
          }}
          style={{ margin: "0 2rem" }}
        >
          open
        </button>

        {/* Funding Filters */}
        <Dropdown
          title={"Funding"}
          options={fundingFilters}
          setOptions={setFundingFilters}
        />
      </FiltersContainer>
    </Container>
  );
};

export default Header;
