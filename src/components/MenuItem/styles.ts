import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing(2)};
  transition: 300ms;
  color: ${(props) => props.theme.colors.secondary.main};
  background-color: hsla(201, 0%, 81%, 0);
  &:hover {
    cursor: pointer;
    transition: 300ms;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
