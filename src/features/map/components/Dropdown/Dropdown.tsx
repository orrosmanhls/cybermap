import React, { useState, useEffect } from "react";

import { categoriesArray as allCategories } from "../../../../data.json";
import { ICategory, IOption } from "../../map.types";
import {
  Container,
  ArrowDropDownIcon,
  ArrowDropUpIcon,
  TitleContainer,
  OptionsContainer,
  Option,
  CheckBoxOutlineBlankIcon,
  CheckSharpIcon,
  StyledSpan,
} from "./styles";

interface Props {
  title: string;
  allOptions: IOption[];
  isOpen: boolean;
  applyFilter: (categories: ICategory[], filter: IOption[]) => ICategory[];
  setFilteredCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
  setOpenDropdowns: React.Dispatch<React.SetStateAction<string[]>>;
}

const Dropdown: React.FC<Props> = ({
  title,
  allOptions,
  isOpen,
  setOpenDropdowns,
  applyFilter,
  setFilteredCategories,
}) => {
  const [options, setOptions] = useState(allOptions);

  const onDropDownClicked: React.MouseEventHandler<HTMLDivElement> = (e) => {
    isOpen ? setOpenDropdowns([]) : setOpenDropdowns([title]);
  };

  const onDropDownBlurred: React.FocusEventHandler<HTMLDivElement> = (e) => {
    setOpenDropdowns([]);
  };

  const toggleOption = (clickedOption: IOption) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.name !== clickedOption.name
          ? option
          : { ...option, selected: !option.selected }
      )
    );
  };

  useEffect(() => {
    // 1. applyFilter(setFilteredCategories, filter)
    const filteredCategories = applyFilter(
      allCategories,
      options.filter((option) => option.selected)
    );
    setFilteredCategories(filteredCategories);
    // 2. Execute filter function and get result
    // 3. set filteredCategories to be result
    // setFilteredOptions(options.filter((option) => option.selected));
  }, [options]);

  return (
    <Container tabIndex={0} onBlur={onDropDownBlurred}>
      <TitleContainer data-testid="dropdown" onClick={onDropDownClicked}>
        {title} {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </TitleContainer>
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <Option key={option.name} onClick={() => toggleOption(option)}>
              {option.selected ? (
                <CheckSharpIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
              <StyledSpan>{option.name}</StyledSpan>
            </Option>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
};

export default Dropdown;
