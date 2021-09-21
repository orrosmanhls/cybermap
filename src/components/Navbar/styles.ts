import { Link } from "react-router-dom";
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

export const MenuItem = styled.div`
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

export const MenuItemInnerLink = styled(Link)`
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

export const MenuItemOutterLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 ${(props) => props.theme.spacing(2)};
  transition: 300ms;
  color: ${(props) => props.theme.colors.secondary.main};
  background-color: hsla(201, 0%, 81%, 0);
  text-decoration: none;
  &:hover {
    cursor: pointer;
    transition: 300ms;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
