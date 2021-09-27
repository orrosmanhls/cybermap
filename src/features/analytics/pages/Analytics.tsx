import React from "react";
import BubbleChart from "../components/BubbleChart/BubbleChart";

import Header from "../components/Header/Header";
import { Container, ChartsContainer } from "./styles";

export const fundingOptions = [
  "$0-$10M",
  "$10M-$30M",
  "$30M-$50M",
  "$50M+",
].map((item) => ({ name: item, selected: false }));

const Analytics: React.FC = () => {
  return (
    <>
      <Container>
        <Header />
        <ChartsContainer>
          <BubbleChart />
        </ChartsContainer>
      </Container>
    </>
  );
};

export default Analytics;
