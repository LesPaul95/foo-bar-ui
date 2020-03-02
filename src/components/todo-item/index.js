import React from "react";
import "./todo-item.css";

export const TodoItem = ({ user, title, completed }) => (
  <div className="todo-container">
    <div>{user}</div>
    <div className="todo-item">
      <p>{title}</p>
      <input type="checkbox" checked={completed} readOnly />
    </div>
  </div>
);
