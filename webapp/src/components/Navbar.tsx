import React from "react";
import { Link } from "react-router-dom";
import { Navbar as NavbarBs, Nav, Container } from "react-bootstrap";

const Navbar: React.FC = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
      <Container>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/sign-in">
            Sign In
          </Nav.Link>
          <Nav.Link as={Link} to="/sign-up">
            Sign Up
          </Nav.Link>
        </Nav>
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
