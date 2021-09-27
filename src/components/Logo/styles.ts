import styled from "styled-components";
import { Link } from "react-router-dom";

interface isMobileProp {
  $isMobile?: boolean;
}

export const Img = styled.img<isMobileProp>`
  height: ${(props) => (props.$isMobile ? "24px" : props.theme.spacing(3))};
  display: flex;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledLogo = styled(Link)<isMobileProp>`
  position: relative;
  display: flex;
  align-items: center;
  ${({ $isMobile }) =>
    $isMobile &&
    `
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `}
`;
