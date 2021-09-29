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
  applyFilter: (categories: ICategory[], filter: IOption[]) => ICategory[];
  setFilteredCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

const Dropdown: React.FC<Props> = ({
  title,
  allOptions,
  applyFilter,
  setFilteredCategories,
}) => {
  const [options, setOptions] = useState(allOptions);
  const [isOpen, setIsOpen] = useState(false);

  const onDropDownClicked: React.MouseEventHandler<HTMLDivElement> = (e) => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  const onDropDownBlurred: React.FocusEventHandler<HTMLDivElement> = (e) => {
    setIsOpen(false);
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
    const filteredCategories = applyFilter(
      allCategories,
      options.filter((option) => option.selected)
    );
    setFilteredCategories(filteredCategories);
  }, [options, applyFilter, setFilteredCategories]);

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
