import React from "react";
import { YLV } from "../Navbar/Navbar";

import {
  Background,
  StyledSidebar,
  MenuItem,
  MenuItemInnerLink,
  MenuItemOutterLink,
  Exit,
} from "./styles";

interface Props {
  showSidebar: boolean;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  openTabModal: (tab: string) => void;
}

const Sidebar: React.FC<Props> = ({
  showSidebar,
  setShowSidebar,
  openTabModal,
}) => {
  const closeSidebar: React.MouseEventHandler<HTMLDivElement | SVGSVGElement> =
    () => {
      setShowSidebar(false);
    };

  const onItemClicked = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    tab: string
  ) => {
    e.stopPropagation();
    openTabModal(tab);
  };

  return (
    <>
      {showSidebar && (
        <Background data-testid="sidebar" onClick={closeSidebar} />
      )}
      <StyledSidebar showSidebar={showSidebar}>
        <Exit onClick={closeSidebar} fontSize={"large"}>
          X
        </Exit>
        <MenuItem
          onClick={(e) => {
            onItemClicked(e, "about");
          }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            onItemClicked(e, "add");
          }}
        >
          Add a company
        </MenuItem>
        <MenuItemInnerLink to={"/analytics"} style={{ textDecoration: "none" }}>
          Analytics
        </MenuItemInnerLink>
        <MenuItemOutterLink href={YLV} target={"_blank"}>
          ylventures.com
        </MenuItemOutterLink>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
