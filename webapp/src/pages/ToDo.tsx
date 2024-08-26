import React, { useState } from "react";
import "../style/ToDo.css";
import { Navbar as NavbarBs, Form, FormControl } from "react-bootstrap";
import { FaBars } from "react-icons/fa";
import { Menu, MenuOption } from "../lib/Menu";

const options: MenuOption[] = [
  { value: "1", label: "Option 1" },
  { value: "2", label: "Option 2" },
  { value: "3", label: "Option 3" },
];
function Todo() {
  const [selectedOption, setSelectedOption] = useState(options[0]);

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
        <Menu
          value={selectedOption}
          onChange={(value: string) => {
            const option = options.find((opt) => opt.value === value);
            if (option) setSelectedOption(option);
          }}
          options={options}
        />
      </div>
    </NavbarBs>
  );
}

export default Todo;
