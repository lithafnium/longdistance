import React from "react";
import { NavbarContainer, NavbarInner, Links, NavItem, Brand } from "./styles";
// import { Link } from "react-router-dom";
import { Button } from "@app/shared/components/button";
import { colors } from "@app/styles/styles";
const Navbar = () => (
  <NavbarContainer>
    <NavbarInner>
      <Brand>GPT3 Demo</Brand>
    </NavbarInner>
  </NavbarContainer>
);

export default Navbar;
