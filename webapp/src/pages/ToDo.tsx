import "../style/ToDo.css";
import { Layout, Input, Button, Image, Flex, AutoComplete } from "antd";
import { FaBars } from "react-icons/fa";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import TaskCards from "../lib/TaskCards";
import React, { useState, useEffect } from "react";
import axios from "axios";

const { Header } = Layout;

interface Task {
  _id: string;
  title: string;
  isCompleted: boolean;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Type for tasks array
  const [newTask, setNewTask] = useState<string>(""); // Type for new task input

  const submitButton = () => {
    console.log("Submit button clicked");
  };

  const handleAddTask = () => {
    if (newTask.trim()) {
      axios
        .post<Task>("http://localhost:3000/todo", { title: newTask })
        .then((response) => {
          setTasks([...tasks, response.data]); // Add new task to state
          setNewTask(""); // Clear input field
        });
    }
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header className="navbar">
        <Link to="/Home">
          <Image
            src="/Logo.png"
            alt="/Home"
            preview={false}
            style={{ height: "70px" }}
          />
        </Link>
        <div className="task-form">
          <Input
            type="text"
            placeholder="Add new task"
            className="task-input"
          />
          <Button className="arrow-btn" onSubmit={submitButton}>
            {">"}
          </Button>
        </div>
      </Header>
      <Content className="content">
        <div>
          <TaskCards />
          <h1 className="h1">Completed</h1>
        </div>
      </Content>
    </Layout>
  );
};

export default TodoApp;
