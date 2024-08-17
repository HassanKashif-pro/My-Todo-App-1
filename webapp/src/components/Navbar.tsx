import React from "react";
import { Link } from "react-router-dom";
import { Navbar as NavbarBs, Nav, Button } from "react-bootstrap";
import "../style/Navbar.css"; // Import the new CSS file

const Navbar: React.FC = () => {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-sm mb-3 me-auto">
      <NavbarBs.Brand href="/" className="navbar-brand">
        <img src="/Logo.png" alt="Logo" className="navbar-logo" />
      </NavbarBs.Brand>
      <Nav className="d-flex">
        <Nav.Link as={Link} to="/" className="nav-link">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/sign-in" className="nav-link">
          Sign In
        </Nav.Link>
        <Nav.Link as={Link} to="/sign-up" className="nav-link">
          Sign Up
        </Nav.Link>
      </Nav>
      <Button
        onClick={() => (window.location.href = "/sign-in")}
        variant="outline-success"
        className="custom-sign-in-button"
      >
        Sign In
      </Button>
    </NavbarBs>
  );
};

export default Navbar;
