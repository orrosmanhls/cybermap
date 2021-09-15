import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* align-self: flex-start; */
  width: 100%;
  min-height: ${(props) => props.theme.spacing(4)};
  background: linear-gradient(90deg, #00b9bc, #eeb422);
`;

export const Menu = styled.div`
  display: flex;
  height: 100%;
`;
