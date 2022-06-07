import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import GrillLogo from "../assets/logo-grill.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar dark color="dark" sticky="top" expand="md">
        <NavbarBrand className="ms-2" href="/">
          <img src={GrillLogo} alt="grill logo" className="Grill-Logo" />
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink className="nav-link fs-5" to="/">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-5" to="/directory">
                Menu
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-5" to="/about">
                Our Story
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link fs-5" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ms-auto" navbar>
            <NavItem>
              <NavLink
                className="nav-link navbar-brand fw-bold fs-5"
                to="/directory"
              >
                Order Now
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
