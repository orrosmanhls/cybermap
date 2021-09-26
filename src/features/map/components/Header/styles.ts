import styled from "styled-components";
import { Reorder, ViewModule } from "@material-ui/icons";

import Typography from "../../../../components/Typography/Typography";
import { theme } from "../../../../styles/themes/theme";

interface DisplayIconProps {
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 3rem;
  /* height: ${(props) => props.theme.spacing(4)}; */
  border-top: 1px solid;
  padding: ${(props) => props.theme.spacing(3)} 0;
`;

export const Title = styled(Typography)`
  margin: 3rem 0;
`;

export const SubTitle = styled(Typography)`
  width: 70%;
  margin-bottom: ${(props) => props.theme.spacing(3)};
  line-height: 1.5rem;
  font-weight: ${(props) => props.theme.typography.fontWeights.medium};
  word-spacing: 0.25rem;
`;

export const Span = styled.span`
  margin-right: auto;
`;

export const DisplaySwitch = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
  margin-left: 1rem;
  border-left: 1px solid #fff;
`;

export const ViewModuleIcon = styled(ViewModule)<DisplayIconProps>`
  margin: 0 0.3rem;
  cursor: pointer;
  ${({ isActive }) =>
    !isActive &&
    `
    color: #9e9e9e;
  `}
`;

export const ReorderIcon = styled(Reorder)<DisplayIconProps>`
  margin-left: 0.3rem;
  cursor: pointer;
  ${({ isActive }) =>
    !isActive &&
    `
    color: #9e9e9e;
  `}
`;

export const TotalCompanies = styled.div``;
