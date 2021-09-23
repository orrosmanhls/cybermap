import React, { useState, useEffect } from "react";

import { IOption } from "../../map.types";
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
  filteredOptions: IOption[];
  setFilteredOptions: React.Dispatch<React.SetStateAction<IOption[]>>;
  isOpen: boolean;
  setOpenDropdowns: React.Dispatch<React.SetStateAction<string[]>>;
}

const Dropdown: React.FC<Props> = ({
  title,
  allOptions,
  filteredOptions,
  setFilteredOptions,
  isOpen,
  setOpenDropdowns,
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
    setFilteredOptions(options.filter((option) => option.selected));
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
