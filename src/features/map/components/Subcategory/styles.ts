import styled from "styled-components";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

import { isBoxProp, isMobileProp } from "../../map.types";

export const Container = styled.div<isBoxProp & isMobileProp>`
  display: flex;
  ${({ isBox }) =>
    !isBox
      ? `
    flex-direction: column;
  `
      : `
    align-items: flex-start;
  `}
  ${({ isMobile }) =>
    !isMobile
      ? `
    width: 80%;
  `
      : `
    padding: 0 .5rem;
  `}
`;

export const CategoryHeader = styled.div<isBoxProp>`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing(2)} 0;
  ${({ isBox }) =>
    isBox
      ? `
      min-width: 25%;
      max-width: 25%;
      padding: 1rem;
  `
      : `
    width: 100%;
  `}
`;

export const Title = styled.div<isBoxProp>`
  display: flex;
  padding: 0.5rem;
  background-color: #00bec1;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.fontSizes.regular};
  ${({ isBox }) =>
    isBox &&
    `
    flex-direction: column;
    width: 100%;
  `}
`;
export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.secondary.main};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
  text-transform: uppercase;
`;
export const SubcategoryTitle = styled.div<isBoxProp>`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeights.regular};
  margin-left: ${(props) => props.theme.spacing(1)};
  ${({ isBox }) =>
    !isBox
      ? `
    text-transform: uppercase;
  `
      : `
    margin: 0.5rem 0 0 0;
    font-size: 0.875rem;
    font-weight: 400;
    color: white;
  `}
`;

export const ArrowDownIcon = styled(KeyboardArrowDown)`
  margin-left: ${(props) => props.theme.spacing(1)};
`;

export const ArrowUpIcon = styled(KeyboardArrowUp)`
  margin-left: ${(props) => props.theme.spacing(1)};
`;

export const TotalCompanies = styled.span<isBoxProp>`
  margin-left: ${(props) => props.theme.spacing(2)};
  color: ${(props) =>
    props.isBox
      ? props.theme.colors.secondary.main
      : props.theme.colors.primary.light};
  ${({ isBox }) =>
    isBox &&
    `
    margin: 0.5rem 0 0 0;
    font-size: 0.875rem;
    font-weight: 500;
  `}
`;

export const CompaniesContainer = styled.div<isMobileProp>`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;

  ${({ isMobile }) =>
    isMobile &&
    `
    justify-content: space-evenly;
  `}
`;

export const CompanyTag = styled.img`
  height: 50px;
  object-fit: contain;
`;
