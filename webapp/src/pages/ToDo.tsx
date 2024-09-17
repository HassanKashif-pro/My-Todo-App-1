import "../style/ToDo.css";
import { Layout, Input, Button, Image } from "antd";
import { Content } from "antd/es/layout/layout";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TaskCards from "../lib/TaskCards";

const { Header } = Layout;

interface Task {
  _id: string;
  title: string;
  isCompleted: boolean;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Type for tasks array
  const [newTask, setNewTask] = useState<string>(""); // Type for new task input

  // Fetch tasks from the backend on component load
  // useEffect(() => {
  //   axios.get<Task[]>("http://localhost:3001/todo").then((response) => {
  //     setTasks(response.data);
  //   });
  // }, []);

  // const handleAddTask = () => {
  //   if (newTask.trim()) {
  //     axios
  //       .post<Task>("http://localhost:3001/todo", { title: newTask })
  //       .then((response) => {
  //         setTasks([...tasks, response.data]); // Add new task to state
  //         setNewTask(""); // Clear input field
  //       });
  //   }
  // };

  // const handleToggleComplete = (id: string) => {
  //   axios.patch(`http://localhost:3001/todo${id}`).then((response) => {
  //     const updatedTasks = tasks.map((task) =>
  //       task._id === response.data._id ? response.data : task
  //     );
  //     setTasks(updatedTasks);
  //   });
  // };

  const renderTaskList = (tasks: Task[], completed: boolean) => {
    return tasks
      .filter((task) => task.isCompleted === completed)
      .map((task) => (
        <div
          key={task._id}
          className={`task-card ${completed ? "completed" : ""}`}
        >
          <input
            type="checkbox"
            checked={task.isCompleted}
            // onChange={() => handleToggleComplete(task._id)}
          />
          <span>{task.title}</span>
        </div>
      ));
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
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <Button className="arrow-btn">{">"}</Button>
        </div>
      </Header>
      <Content className="content">
        <TaskCards />
      </Content>
    </Layout>
  );
};

export default TodoApp;
