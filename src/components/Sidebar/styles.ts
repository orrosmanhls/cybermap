import styled from "styled-components";
import { Link } from "react-router-dom";
import { CloseSharp } from "@material-ui/icons";

interface showSidebarProp {
  showSidebar?: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const StyledSidebar = styled.aside<showSidebarProp>`
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 80vw;
  max-width: 80vw;
  /* width: 250px; */
  height: 100vh;
  z-index: 10;
  transition: transform 0.25s ease-out;
  transform: ${(props) =>
    props.showSidebar ? `translateX(0%);` : "translateX(-100%);"};
`;

export const Exit = styled(CloseSharp)`
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
  /* font-size: 2rem; */
  color: ${(props) => props.theme.colors.primary.dark};
  cursor: pointer;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing(2)}
    ${(props) => props.theme.spacing(3)};
  color: ${(props) => props.theme.colors.primary.main};
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
  padding: ${(props) => props.theme.spacing(2)}
    ${(props) => props.theme.spacing(3)};
  color: ${(props) => props.theme.colors.primary.main};
  background-color: hsla(201, 0%, 81%, 0);
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const MenuItemOutterLink = styled.a`
  display: flex;
  align-items: center;
  padding: ${(props) => props.theme.spacing(2)}
    ${(props) => props.theme.spacing(3)};
  color: ${(props) => props.theme.colors.primary.main};
  background-color: hsla(201, 0%, 81%, 0);
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
