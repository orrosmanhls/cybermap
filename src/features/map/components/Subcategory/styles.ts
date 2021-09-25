import styled from "styled-components";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
`;

export const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: ${(props) => props.theme.spacing(2)} 0;
`;

export const Title = styled.div`
  display: flex;
  padding: 0.5rem;
  background-color: #00bec1;
  text-transform: uppercase;
  padding: 0.75rem 1rem;
  cursor: pointer;
  font-size: ${(props) => props.theme.typography.fontSizes.regular};
`;
export const CategoryTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.secondary.main};
  font-weight: ${(props) => props.theme.typography.fontWeights.bold};
`;
export const SubcategoryTitle = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeights.regular};
  margin-left: ${(props) => props.theme.spacing(1)};
`;

export const ArrowDownIcon = styled(KeyboardArrowDown)`
  margin-left: ${(props) => props.theme.spacing(1)};
`;

export const ArrowUpIcon = styled(KeyboardArrowUp)`
  margin-left: ${(props) => props.theme.spacing(1)};
`;

export const TotalCompanies = styled.span`
  margin-left: ${(props) => props.theme.spacing(2)};
  color: ${(props) => props.theme.colors.primary.light};
`;

export const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
`;

export const CompanyTag = styled.img`
  height: 50px;
  object-fit: contain;
`;
