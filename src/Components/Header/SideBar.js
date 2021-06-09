import React from "react";
import styled from "styled-components";
import Navigation from "../Header/Navigation";

function SideBar() {
  const SidebarStyled = styled.div`
    width: 16.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--sidebar-dark-color);
  `;
  return (
    <SidebarStyled>
      <Navigation />
    </SidebarStyled>
  );
}

export default SideBar;
