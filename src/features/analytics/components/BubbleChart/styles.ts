import styled from "styled-components";
import Typography from "../../../../components/Typography/Typography";

interface isActiveProp {
  $isActive?: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.5rem;
  border-bottom: 1px solid white;
`;

export const ChartTitle = styled(Typography).attrs({
  component: "h4",
})`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.typography.fontSizes.smaller};
  font-weight: ${(props) => props.theme.typography.fontWeights.medium};
`;

export const FundingFilters = styled.div``;

export const FundingButton = styled.button<isActiveProp>`
  outline: none;
  padding: 4px 10px;
  border: 1px solid #fff;
  border-radius: 30px;
  min-width: 70px;
  margin: 4px;
  cursor: pointer;
  line-height: 1.15rem;

  background-color: ${(props) => (props.$isActive ? "#fff" : "transparent")};
  opacity: ${(props) => (props.$isActive ? 1 : 0.4)};
  color: ${(props) => (props.$isActive ? "#15181b" : "#fff")};

  ${(props) =>
    !props.$isActive &&
    `
    &:hover {
      opacity: 1;
    }
  `}
`;
