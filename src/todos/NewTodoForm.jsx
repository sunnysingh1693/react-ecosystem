import React, { useState } from "react";
import "./NewTodoForm.css";

export default function NewTodoForm() {
  const [inputValue, setinputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        type="text"
        className="new-todo-input"
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
        placeholder="Type Your New Todo Here"
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
}
