import React from "react";

// global styled components
import Logo from "../Logo/Logo";
import MenuItem from "../MenuItem/MenuItem";

// local styled html elements
import { Container, Menu } from "./styles"; // styled html elements

interface Props {}

const Navbar: React.FC<Props> = () => {
  return (
    <Container data-testid="navbar">
      <Logo />
      <Menu>
        <MenuItem
          text={"About"}
          onClick={(e) => {
            console.log("hello world");
          }}
        />
        <MenuItem
          text={"Add a company"}
          onClick={(e) => {
            console.log("hello world");
          }}
        />
        <MenuItem
          text={"Analytics"}
          onClick={(e) => {
            console.log("hello world");
          }}
        />
        <MenuItem
          text={"ylventures.com"}
          onClick={(e) => {
            console.log("hello world");
          }}
        />
      </Menu>
    </Container>
  );
};

export default Navbar;
