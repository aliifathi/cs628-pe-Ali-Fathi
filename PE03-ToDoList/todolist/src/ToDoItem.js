import React from "react";

export default function ToDoItem({ task, onDelete }) {
  return (
    <li className="todo-item">
      {task}
      <button className="delete-btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}
