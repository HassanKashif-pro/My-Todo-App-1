import React, { useState } from "react";
import "../style/ToDo.css";
import { Button, Checkbox, Input, Card } from "antd"; // Import Card and Input components from AntD
import axios from "axios";

const TaskCards: React.FC = () => {
  // Define tasks in the state
  const [tasks, setTasks] = useState([
    { id: 1, text: "Go shopping", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    if (newTask.trim()) {
      const newTaskObject = {
        id: tasks.length + 1,
        text: newTask,
        completed: false,
      };
      setTasks([...tasks, newTaskObject]);
      setNewTask(""); // Clear input after adding
    }
  };

  // Toggle the task completion
  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Handle checkbox state change
  const handleCheckboxChange = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Update state with the toggled task
  };

  // Function to delete a task
  const deleteTask = () => {
    const tasksToDelete = tasks.filter((task) => task.completed);
    tasksToDelete.map((task) => {
      axios.delete(`http://localhost:4000/todo/${task.id}`).then((response) => {
        const updatedTasks = tasks.filter(
          (task) => task.id !== response.data.id
        );
        setTasks(updatedTasks);
      });
    });
  };

  return (
    <div>
      {/* Input for new task */}
      <div className="input-container">
        <Input
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ width: "300px", marginRight: "10px" }}
        />
        <Button onClick={addTask} type="primary">
          Add Task
        </Button>
      </div>

      {/* Incomplete tasks */}
      <h1 className="h1-todo">Incomplete Tasks</h1>
      <div className="cards">
        {tasks
          .filter((task) => !task.completed) // Only show incomplete tasks
          .map((task) => (
            <Card key={task.id} className="task-list">
              <Checkbox
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
                className="check-box"
              />
              {task.text}
              <Button className="crossBtn" onClick={deleteTask}>
                Ｘ
              </Button>
            </Card>
          ))}
      </div>

      <h1 className="h1-todo">Completed Tasks</h1>

      {/* Completed tasks */}
      <div className="cards">
        {tasks
          .filter((task) => task.completed) // Only show completed tasks
          .map((task) => (
            <Card key={task.id} className="task-list">
              <Checkbox
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
                className="check-box"
              />
              {task.text}
              <Button className="crossBtn" onClick={deleteTask}>
                Ｘ
              </Button>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default TaskCards;
