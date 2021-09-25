import React from "react";

import { debounce } from "../../map.utils";
import { ICategory } from "../../map.types";
import { Container, SearchIcon, Input } from "./styles";

interface Props {
  setFilteredCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

const Search: React.FC<Props> = () => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setTextFilters(e.target.value);
  };

  return (
    <Container data-testid="search">
      <SearchIcon />
      <Input onChange={debounce(onInputChange, 250)} />
    </Container>
  );
};

export default Search;
