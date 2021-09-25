import React, { useState } from "react";

import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search";
import { fundingOptions } from "../../pages/Home/Home";
import { categoriesArray as allCategories } from "../../../../data.json";
import { IOption, ICategory } from "../../map.types";
import { filterByCategory, filterByFunding } from "../../map.utils";
import { Container, Title, FiltersContainer, SubTitle } from "./styles";

interface Props {
  allFundings: IOption[];
  setFilteredCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

const Header: React.FC<Props> = ({ allFundings, setFilteredCategories }) => {
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
          isOpen={openDropdowns.some((item) => item === "Categories")}
          setOpenDropdowns={setOpenDropdowns}
          applyFilter={filterByCategory}
          setFilteredCategories={setFilteredCategories}
        />

        {/* Funding Filters */}
        <Dropdown
          title={"Funding"}
          allOptions={allFundings}
          isOpen={openDropdowns.some((item) => item === "Funding")}
          setOpenDropdowns={setOpenDropdowns}
          applyFilter={filterByFunding}
          setFilteredCategories={setFilteredCategories}
        />
        <Search setFilteredCategories={setFilteredCategories} />
      </FiltersContainer>
    </Container>
  );
};

export default Header;
