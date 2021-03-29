import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink href="/" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink href="./#speak" onClick={toggle}>
            Speakers
          </SidebarLink>
          <SidebarLink href="./#about" onClick={toggle}>
            About Us
          </SidebarLink>
          <SidebarLink href="./#sponsors" onClick={toggle}>
            Sponsors
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute href="/">Tickets</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};
export default Sidebar;
