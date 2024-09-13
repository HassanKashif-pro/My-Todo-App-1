import React, { useState, useEffect } from "react";
import axios from "axios";

// Define the task structure
interface Task {
  _id: string;
  title: string;
  isCompleted: boolean;
}

const TodoApp: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Type for tasks array
  const [newTask, setNewTask] = useState<string>(""); // Type for new task input

  // Fetch tasks on component load
  useEffect(() => {
    axios.get<Task[]>("http://localhost:3000/todo").then((response) => {
      setTasks(response.data);
    });
  }, []);

  // Handle adding a new task
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

  // Toggle task completion
  const handleToggleComplete = (id: string) => {
    axios.patch<Task>(`http://localhost:3000/todo/${id}`).then((response) => {
      const updatedTasks = tasks.map((task) =>
        task._id === response.data._id ? response.data : task
      );
      setTasks(updatedTasks); // Update the task list in the state
    });
  };

  return (
    <div>
      <div>
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>

      <h1>Incomplete Tasks</h1>
      <ul>
        {tasks
          .filter((task) => !task.isCompleted)
          .map((task) => (
            <li key={task._id}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleToggleComplete(task._id)}
              />
              {task.title}
            </li>
          ))}
      </ul>

      <h1>Completed Tasks</h1>
      <ul>
        {tasks
          .filter((task) => task.isCompleted)
          .map((task) => (
            <li key={task._id}>
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleToggleComplete(task._id)}
              />
              {task.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoApp;
