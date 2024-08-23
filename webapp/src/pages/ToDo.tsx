import React from "react";
import "../style/ToDo.css";
import { Navbar as NavbarBs, Form, FormControl, Button } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

function Todo() {
  return (
    <NavbarBs className="navbar">
      <img src="Logo.png" alt="Logo" className="logo" />

      <Form className="task-form">
        <FormControl
          type="text"
          placeholder="Add new task"
          className="task-input"
        />
      </Form>
      <div className="icon-right">
        <FaBars />
      </div>
    </NavbarBs>
  );
}

export default Todo;
