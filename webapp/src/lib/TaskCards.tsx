import React, { useState } from "react";
import "../style/ToDo.css";
import { Checkbox } from "antd";

const TaskCards: React.FC = () => {
  // Define tasks in the state
  const [tasks, setTasks] = useState([
    { text: "Go shopping", completed: false },
    { text: "Short exercise", completed: false },
    { text: "Meditation", completed: false },
  ]);

  // Handle checkbox state change
  const handleCheckboxChange = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; // Toggle completed status
    setTasks(updatedTasks); // Update state with the toggled task
  };

  return (
    <div>
      {/* Incomplete tasks */}
      <div className="top-cards">
        {tasks
          .filter((task) => !task.completed) // Only show incomplete tasks here
          .map((task, index) => (
            <div key={index} className="task-list">
              <Checkbox
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
                className="check-box"
              />
              {task.text}
            </div>
          ))}
      </div>

      {/* Completed tasks */}
      <div className="bottom-cards">
        <h1 className="h1">Completed Tasks</h1>
        <div className="task-list">
          {tasks
            .filter((task) => task.completed) // Only show completed tasks here
            .map((task, index) => (
              <div key={index} className="task-list">
                <Checkbox
                  checked={task.completed}
                  onChange={() => handleCheckboxChange(index)} // Checkbox will allow moving task back to incomplete
                  className="check-box"
                />
                {task.text}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default TaskCards;
