import React, { useState } from "react";
import ToDoList from "./ToDoList"; // Make sure this file exists!
import "./App.css"; // Make sure App.css exists!

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask(""); // Clear input field
    }
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="app-container">
      <h1>ToDo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <ToDoList tasks={tasks} onDelete={handleDeleteTask} />
    </div>
  );
}
