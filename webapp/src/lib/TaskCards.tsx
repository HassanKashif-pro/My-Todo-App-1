import React, { useState } from "react";
import "../style/ToDo.css";
import { Checkbox } from "antd";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const TaskCards: React.FC = () => {
  // Define tasks in the state
  const [tasks, setTasks] = useState([
    { id: 1, text: "Go shopping", completed: false },
    { id: 2, text: "Short exercise", completed: false },
    { id: 3, text: "Meditation", completed: false },
  ]);

  // Handle checkbox state change
  const handleCheckboxChange = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks); // Update state with the toggled task
  };

  return (
    <div>
      {/* Incomplete tasks */}
      <div className="cards">
        {tasks
          .filter((task) => !task.completed) // Only show incomplete tasks here
          .map((task) => (
            <div key={task.id} className="task-list">
              <Checkbox
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
                className="check-box"
              />
              {task.text}
            </div>
          ))}
      </div>

      <h1 className="h1-todo">Completed Tasks</h1>

      {/* Completed tasks */}
      <div className="cards">
        {tasks
          .filter((task) => task.completed) // Only show completed tasks here
          .map((task) => (
            <div key={task.id} className="task-list">
              <Checkbox
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)} // Checkbox will allow moving task back to incomplete
                className="check-box" // Apply custom class
              />
              {task.text}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TaskCards;
