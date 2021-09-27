import React from "react";
import { isValidUrl } from "../../features/map/map.utils";

import { Container, LinkedIn, Twitter, Website } from "./styles";

interface Props {
  type: "website" | "crunchbase" | "linkedin" | "twitter";
  link: string;
}

const SocialIcon: React.FC<Props> = ({ type, link }) => {
  const isValidLink = isValidUrl(link);
  return isValidLink ? (
    <Container data-testid="social-icon" href={link}>
      {type === "crunchbase" && "cb"}
      {type === "website" && <Website />}
      {type === "linkedin" && <LinkedIn />}
      {type === "twitter" && <Twitter />}
    </Container>
  ) : null;
};

export default SocialIcon;
