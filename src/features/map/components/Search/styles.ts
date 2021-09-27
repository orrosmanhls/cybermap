import styled from "styled-components";
import { SearchSharp } from "@material-ui/icons";

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.secondary.main};
  /* height: 2rem; */
  /* width: ${(props) => props.theme.spacing(6)}; */
  border-radius: 25px;
  padding: 3px 5px;
  margin: 0 ${(props) => props.theme.spacing(1)};
`;

export const SearchIcon = styled(SearchSharp)``;

export const Input = styled.input`
  outline: 0;
  border: 0;
  /* height: 100%; */
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary.main};
  font-size: 0.875rem;
  font-weight: ${(props) => props.theme.typography.fontWeights.regular};
  &::placeholder {
    color: ${(props) => props.theme.colors.secondary.main};
  }
`;
