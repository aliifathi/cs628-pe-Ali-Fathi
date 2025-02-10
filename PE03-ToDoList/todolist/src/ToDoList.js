import React from "react";
import ToDoItem from "./ToDoItem";

export default function ToDoList({ tasks, onDelete }) {
  return (
    <ul className="todo-list">
      {tasks.map((task, index) => (
        <ToDoItem key={index} task={task} onDelete={() => onDelete(index)} />
      ))}
    </ul>
  );
}
