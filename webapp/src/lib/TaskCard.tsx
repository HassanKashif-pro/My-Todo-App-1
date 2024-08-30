import React, { useState } from "react";
import "./TaskCard.css";

function TaskCard({ task, isCompleted }) {
  const [completed, setCompleted] = useState(isCompleted);

  const handleCompletion = () => {
    setCompleted(!completed);
  };

  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <label className="task-label">
        <input type="radio" checked={completed} onChange={handleCompletion} />
        <span className="task-text">{task}</span>
      </label>
    </div>
  );
}

export default TaskCard;
