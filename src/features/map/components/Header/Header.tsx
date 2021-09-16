import React from "react";

import { Container, Title, FiltersContainer, SubTitle } from "./styles";
import Dropdown from "../../../../components/Dropdown/Dropdown";

import dataJSON from "../../../../data.json";
const categories = dataJSON.categories.map((category) => ({
  name: category.category,
  selected: false,
}));

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Container data-testid="header">
      <Title component={"h1"}>Welcome to CyberMap</Title>
      <SubTitle>
        CyberMap by YL Ventures is the first open, interactive, comprehensive,
        live map of Israel’s cybersecurity startup landscape.
      </SubTitle>
      <FiltersContainer>
        <Dropdown
          title={"Categories"}
          options={categories}
          onClick={() => {}}
        />
      </FiltersContainer>
    </Container>
  );
};

export default Header;
