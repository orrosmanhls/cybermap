import React, { useState } from "react";

import { Container, Title, FiltersContainer, SubTitle } from "./styles";
import Dropdown from "../Dropdown/Dropdown";
import { IOption, ICategory } from "../../map.types";
import { filterByCategory, filterByFunding } from "../../map.utils";
import Search from "../Search/Search";

interface Props {
  allCategories: IOption[];
  allFundings: IOption[];
  setFilteredCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

const Header: React.FC<Props> = ({
  allCategories,
  allFundings,
  setFilteredCategories,
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
          applyFilter={filterByCategory}
          allOptions={allCategories}
          setFilteredCategories={setFilteredCategories}
          isOpen={openDropdowns.some((item) => item === "Categories")}
          setOpenDropdowns={setOpenDropdowns}
        />

        {/* Funding Filters */}
        <Dropdown
          title={"Funding"}
          allOptions={allFundings}
          applyFilter={filterByFunding}
          setFilteredCategories={setFilteredCategories}
          isOpen={openDropdowns.some((item) => item === "Funding")}
          setOpenDropdowns={setOpenDropdowns}
        />
        <Search setFilteredCategories={setFilteredCategories} />
      </FiltersContainer>
    </Container>
  );
};

export default Header;
