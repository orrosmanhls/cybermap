import styled from "styled-components";

export const Img = styled.img`
  display: flex;
  align-self: center;
  height: ${(props) => props.theme.spacing(3)};
  &:hover {
    cursor: pointer;
  }
`;
