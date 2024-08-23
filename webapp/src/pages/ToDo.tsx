import React from "react";
import "../style/ToDo.css";
import { Navbar as NavbarBs, Form, FormControl, Button } from "react-bootstrap";
import { FaBars, FaDotCircle } from "react-icons/fa"; // You can replace with appropriate icons

function Todo() {
  return (
    <NavbarBs className="navbar">
      <div className="icon-left">
        <img src="Logo.png" alt="Logo" className="logo" />
      </div>
      <Form className="task-form">
        <FormControl
          type="text"
          placeholder="Add new task"
          className="task-input"
        />
        <Button variant="outline-light" className="task-button">
          <FaBars />
        </Button>
      </Form>
    </NavbarBs>
  );
}

export default Todo;
