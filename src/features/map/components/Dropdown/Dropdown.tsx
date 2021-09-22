import React, { useState } from "react";

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
  options: IOption[];
  setOptions: React.Dispatch<React.SetStateAction<IOption[]>>;
}

const Dropdown: React.FC<Props> = ({ title, options, setOptions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (clickedOption: IOption) => {
    setOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.name !== clickedOption.name
          ? option
          : { ...option, selected: !option.selected }
      )
    );
  };

  return (
    <Container>
      <TitleContainer
        data-testid="dropdown"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {title} {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </TitleContainer>
      {isOpen && (
        <OptionsContainer>
          {options.map((option) => (
            <Option onClick={() => toggleOption(option)}>
              {option.selected ? (
                <CheckBoxOutlineBlankIcon />
              ) : (
                <CheckSharpIcon />
              )}{" "}
              <StyledSpan>{option.name}</StyledSpan>
            </Option>
          ))}
        </OptionsContainer>
      )}
    </Container>
  );
};

export default Dropdown;
