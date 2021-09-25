import React from "react";

import { categoriesArray as categories } from "../../../../data.json";
import { debounce, filterByText } from "../../map.utils";
import { ICategory } from "../../map.types";
import { Container, SearchIcon, Input } from "./styles";

interface Props {
  setFilteredCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

const Search: React.FC<Props> = ({ setFilteredCategories }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filteredCategories = filterByText(categories, e.target.value);
    setFilteredCategories(filteredCategories);
  };

  return (
    <Container data-testid="search">
      <SearchIcon />
      <Input onChange={onInputChange} />
      {/* <Input onChange={debounce(onInputChange, 250)} /> */}
    </Container>
  );
};

export default Search;
