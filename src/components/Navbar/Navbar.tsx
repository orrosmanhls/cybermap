import React, { useState } from "react";
import { useMediaQuery } from "@material-ui/core";

import { useModal, useModalUpdate } from "../../contexts/ModalContext";
import Logo from "../Logo/Logo";
import Sidebar from "../Sidebar/Sidebar";
import {
  Container,
  Menu,
  MenuItem,
  MenuItemInnerLink,
  MenuItemOutterLink,
  SidebarIcon,
} from "./styles";

export const YLV = "https://www.ylventures.com";

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [showSidebar, setShowSidebar] = useState(false);

  const { showModal } = useModal();
  const { toggleModal, updateModalType } = useModalUpdate();

  const openTabModal = (tab: string) => {
    if (showModal) {
      updateModalType(null);
    } else {
      updateModalType({
        type: "tab",
        tab: tab,
      });
    }
    toggleModal();
  };

  const openSidebar: React.MouseEventHandler<SVGSVGElement> = () => {
    setShowSidebar(true);
  };

  return (
    <>
      {isMobile && (
        <Sidebar
          showSidebar={showSidebar}
          setShowSidebar={setShowSidebar}
          openTabModal={openTabModal}
        />
      )}
      <Container data-testid="navbar" isMobile={isMobile}>
        {isMobile && <SidebarIcon onClick={openSidebar} />}
        <Logo isMobile={isMobile} />
        {!isMobile && (
          <Menu>
            <MenuItem
              onClick={() => {
                openTabModal("about");
              }}
            >
              About
            </MenuItem>
            <MenuItem
              onClick={() => {
                openTabModal("add");
              }}
            >
              Add a company
            </MenuItem>
            <MenuItemInnerLink
              to={"/analytics"}
              style={{ textDecoration: "none" }}
            >
              Analytics
            </MenuItemInnerLink>
            <MenuItemOutterLink href={YLV} target={"_blank"} onClick={() => {}}>
              ylventures.com
            </MenuItemOutterLink>
          </Menu>
        )}
      </Container>
    </>
  );
};

export default Navbar;
