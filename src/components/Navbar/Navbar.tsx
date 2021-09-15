import React from "react";

// global styled components
import Logo from "../Logo/Logo";
import MenuItem from "../MenuItem/MenuItem";

// local styled html elements
import { Container, Menu } from "./styles"; // styled html elements

interface Props {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<Props> = ({ setShowModal }) => {
  const openModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setShowModal(true);
  };

  return (
    <Container data-testid="navbar">
      <Logo />
      <Menu>
        <MenuItem text={"About"} onClick={openModal} />
        <MenuItem text={"Add a company"} onClick={openModal} />
        <MenuItem text={"Analytics"} onClick={openModal} />
        <MenuItem text={"ylventures.com"} onClick={openModal} />
      </Menu>
    </Container>
  );
};

export default Navbar;
