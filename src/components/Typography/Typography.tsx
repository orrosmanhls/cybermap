import React from "react";

import {
  StyledDiv,
  StyledSpan,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledParagraph,
} from "./styles";

interface Props {
  component?: string;
  className?: string;
}

const Typography: React.FC<Props> = ({
  children,
  className,
  component = "div",
}) => {
  switch (component) {
    case "h1":
      return <StyledH1 className={className}>{children}</StyledH1>;
    case "h2":
      return <StyledH2 className={className}>{children}</StyledH2>;

    case "h3":
      return <StyledH3 className={className}>{children}</StyledH3>;

    case "h4":
      return <StyledH4 className={className}>{children}</StyledH4>;

    case "span":
      return <StyledSpan className={className}>{children}</StyledSpan>;

    case "p":
      return (
        <StyledParagraph className={className}>{children}</StyledParagraph>
      );

    case "div":
      return <StyledDiv className={className}>{children}</StyledDiv>;

    default:
      break;
  }
};

export default Typography;
