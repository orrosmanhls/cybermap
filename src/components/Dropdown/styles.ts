import styled from "styled-components";
import {
  ArrowDropDown,
  ArrowDropUp,
  CheckBoxOutlineBlank,
  CheckBoxOutlined,
  CheckSharp,
} from "@material-ui/icons";
import Typography from "../Typography/Typography";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.theme.typography.fontWeights.medium};
  cursor: pointer;
  position: relative;
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${(props) => props.theme.typography.fontWeights.medium};
  cursor: pointer;
`;

export const ArrowDropDownIcon = styled(ArrowDropDown)`
  color: #00bec1;
`;
export const ArrowDropUpIcon = styled(ArrowDropUp)`
  color: #00bec1;
`;

export const OptionsContainer = styled.ul`
  list-style: none;
  text-decoration: none;
  height: ${(props) => props.theme.spacing(6)};
  overflow-y: scroll;
  position: absolute;
  padding: 0;
  margin: 0;
  top: 2.5rem;
  left: 0;
  width: fit-content;
  background-color: ${(props) => props.theme.colors.secondary.main};
  width: ${(props) => props.theme.spacing(6)};
`;

export const Option = styled.li`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing(1)}
    ${(props) => props.theme.spacing(2)};
  font-size: ${(props) => props.theme.typography.fontSizes.smaller};
  text-decoration: none;
  padding: ${(props) => props.theme.spacing(1)}
    ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.colors.primary.main};
`;

export const StyledSpan = styled(Typography)`
  font-weight: ${(props) => props.theme.typography.fontWeights.medium};
`;

export const CheckBoxOutlineBlankIcon = styled(CheckBoxOutlineBlank)`
  margin-right: 1rem;
  color: #5a5a5a;
`;

export const CheckBoxOutlinedIcon = styled(CheckBoxOutlined)`
  margin-right: 1rem;
`;

export const CheckSharpIcon = styled(CheckSharp)`
  margin-right: 1rem;
  font-size: 1.5rem;
  color: #00bec1;
`;
