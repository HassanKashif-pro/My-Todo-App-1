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
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:4000/todo")
      .then((response) => {
        console.log(response.data); // Check if data is received
        setTasks(response.data); // Set the tasks in state
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
      });
  }, []);

  const handleAddTask = () => {
    if (newTask.trim()) {
      setIsLoading(true); // Set loading state before making the request
      axios
        .post("http://localhost:4000/todo", { title: newTask }) // Send task to server
        .then((response) => {
          setTasks([...tasks, response.data]); // Add new task to state
          setNewTask(""); // Clear the input field after successful addition
        })
        .catch((error) => {
          console.error("Error adding task:", error);
          alert("Failed to add task. Please try again.");
        })
        .finally(() => {
          setIsLoading(false); // Reset loading state after the request completes
        });
    } else {
      alert("Task cannot be empty!");
    }
  };

  const handleToggleComplete = (id: string) => {
    axios.patch(`http://localhost:4000/todo${id}`).then((response) => {
      const updatedTasks = tasks.map((task) =>
        task._id === response.data._id ? response.data : task
      );
      setTasks(updatedTasks);
    });
  };

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
            onChange={() => handleToggleComplete(task._id)}
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
          <Button className="arrow-btn" onClick={handleAddTask}>
            {">"}
          </Button>
        </div>
      </Header>
      <Content className="content">
        <TaskCards />
      </Content>
    </Layout>
  );
};

export default TodoApp;
