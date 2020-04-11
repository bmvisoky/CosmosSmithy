import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "./logo.png"
import { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="#e1e8f0" light>
        <NavbarBrand href="/"><img id="logo" src={Logo} alt="Cosmos Smithy!"/></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/character/">Character</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/initiative/">Initiative</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/journal/">Journal</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}


export default NavBar;
