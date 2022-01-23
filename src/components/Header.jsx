import React from "react";
import { Container, Navbar, NavbarBrand, Row } from "react-bootstrap";
// logo
import logo from "../assets/images/bellotero.png";

function Header({ children }) {
  return (
    <header className="header">
      <Navbar expand="lg">
        <Container>
          <nav className="nav">
            <NavbarBrand className="logo">
              <img src={logo} alt="logo" />
            </NavbarBrand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">{children}</Navbar.Collapse>
          </nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
