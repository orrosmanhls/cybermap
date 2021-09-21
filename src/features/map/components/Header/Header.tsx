import React, { useState } from "react";

import { Container, Title, FiltersContainer, SubTitle } from "./styles";
import Dropdown from "../../../../components/Dropdown/Dropdown";
import dataJSON from "../../../../data.json";
import { useModalUpdate, useModal } from "../../../../contexts/ModalContext";

const categories = dataJSON.categories.map((category) => ({
  name: category.category,
  selected: true,
}));

interface Props {}

const Header: React.FC<Props> = () => {
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const { toggleModal, updateModalType } = useModalUpdate();
  const { modalType } = useModal();

  const openModal = (companyName: string) => {
    updateModalType({
      type: "company",
      company: companyName,
    });
    toggleModal();
  };
  console.log(modalType);
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
          options={filteredCategories}
          setOptions={setFilteredCategories}
        />
        <button
          onClick={() => {
            openModal("1touch.io");
          }}
        >
          open
        </button>
      </FiltersContainer>
    </Container>
  );
};

export default Header;
