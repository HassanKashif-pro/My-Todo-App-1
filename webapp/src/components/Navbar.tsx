import React from "react";
import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/sign-up">
            SignIn
          </Nav.Link>
          <Nav.Link as={NavLink} to="/sign-in">
            SignUp
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            Product
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
}

export default Navbar;
