import React from "react";
import "../style/ToDo.css";
import { Navbar as NavbarBs, Form, FormControl } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function Todo() {
  return (
    <NavbarBs className="navbar">
      {/* Logo on the left */}
      <img src="Logo.png" alt="Logo" className="logo" />

      {/* Task input centered */}
      <Form className="task-form">
        <FormControl
          type="text"
          placeholder="Add new task"
          className="task-input"
        />
      </Form>

      {/* Icon on the right */}
      <div className="icon-right">
        <FaBars />
      </div>
    </NavbarBs>
  );
}

export default Todo;
