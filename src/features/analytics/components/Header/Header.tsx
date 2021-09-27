import React from "react";

import { Container, Title, Subtitle } from "./styles";

interface Props {}

const Header: React.FC<Props> = () => {
  return (
    <Container data-testid="header">
      <Title>CyberMap Analytics</Title>
      <Subtitle>
        Explore YL Ventures’ CyberMap analytics to gain in-depth perspectives of
        the Israeli cybersecurity ecosystem. Track the industry's movements and
        market trends with our data-driven findings of solution categories,
        funding rounds, exits, and more!
      </Subtitle>
    </Container>
  );
};

export default Header;
