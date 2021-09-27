import React, { useState } from "react";

import { fundingOptions as fundings } from "../../pages/Analytics";
import { HelpIcon } from "../../pages/styles";
import {
  Container,
  FiltersContainer,
  ChartTitle,
  FundingButton,
  FundingFilters,
} from "./styles";
import { IOption } from "../../../map/map.types";

interface Props {}

const BubbleChart: React.FC<Props> = () => {
  const [fundingOptions, setFundingOptions] = useState<IOption[]>(
    fundings.concat([{ name: "All", selected: true }])
  );
  // const [filteredCompanies, setFilteredCompanies] = useState(companies);

  const onFundingButtonClicked = (option: IOption) => {
    setFundingOptions((prevOptions) =>
      prevOptions.map((prevOption) => ({
        ...prevOption,
        selected: prevOption.name === option.name ? !option.selected : false,
      }))
    );
  };

  return (
    <Container data-testid="bubble-chart">
      <FiltersContainer>
        <ChartTitle>
          Companies per category <HelpIcon />
        </ChartTitle>
        <FundingFilters>
          {fundingOptions.map((option) => (
            <FundingButton
              $isActive={option.selected}
              key={option.name}
              onClick={(e) => {
                onFundingButtonClicked(option);
              }}
            >
              {option.name}
            </FundingButton>
          ))}
        </FundingFilters>
      </FiltersContainer>
    </Container>
  );
};

export default BubbleChart;
