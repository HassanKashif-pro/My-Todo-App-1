import React from "react";
import "../style/ToDo.css";
import { Nav, Navbar as NavbarBs } from "react-bootstrap";

function Todo() {
  return (
    <NavbarBs.Brand href="/" className="navbar-brand">
      <img src="/Logo.png" alt="Logo" className="navbar-logo" />
      <img src="/Logo.png" alt="Logo" className="navbar-logo" />
    </NavbarBs.Brand>
  );
}

export default Todo;
