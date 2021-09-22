import React from "react";

import { debounce } from "../../map.utils";
import { Container, SearchIcon, Input } from "./styles";

interface Props {
  setTextFilter: React.Dispatch<React.SetStateAction<string>>;
}

const Search: React.FC<Props> = ({ setTextFilter }) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTextFilter(e.target.value);
  };

  return (
    <Container data-testid="search">
      <SearchIcon />
      <Input onChange={debounce(onInputChange, 250)} />
    </Container>
  );
};

export default Search;
