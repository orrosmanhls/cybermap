import React, { useState } from "react";

import { Container, Title, FiltersContainer, SubTitle } from "./styles";
import Dropdown from "../Dropdown/Dropdown";
import { useModalUpdate, useModal } from "../../../../contexts/ModalContext";
import { IOption } from "../../map.types";
import Search from "../Search/Search";

interface Props {
  allCategories: IOption[];
  allFundings: IOption[];
  filteredCategories: IOption[];
  fundingFilters: IOption[];
  setTextFilter: React.Dispatch<React.SetStateAction<string>>;
  setFilteredCategories: React.Dispatch<React.SetStateAction<IOption[]>>;
  setFundingFilters: React.Dispatch<React.SetStateAction<IOption[]>>;
}

const Header: React.FC<Props> = ({
  allCategories,
  allFundings,
  filteredCategories,
  fundingFilters,
  setFilteredCategories,
  setFundingFilters,
  setTextFilter,
}) => {
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);

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
          allOptions={allCategories}
          filteredOptions={filteredCategories}
          setFilteredOptions={setFilteredCategories}
          isOpen={openDropdowns.some((item) => item === "Categories")}
          setOpenDropdowns={setOpenDropdowns}
        />

        {/* Funding Filters */}
        <Dropdown
          title={"Funding"}
          allOptions={allFundings}
          filteredOptions={fundingFilters}
          setFilteredOptions={setFundingFilters}
          isOpen={openDropdowns.some((item) => item === "Funding")}
          setOpenDropdowns={setOpenDropdowns}
        />
        <Search setTextFilter={setTextFilter} />
      </FiltersContainer>
    </Container>
  );
};

export default Header;
