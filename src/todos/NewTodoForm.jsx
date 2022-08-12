import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";
import "./NewTodoForm.css";

export const mapStateToProps = (state) => ({
  todos: state.todos,
});
export const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function NewTodoForm({ todos, onCreatePressed }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="new-todo-input"
        placeholder="Type your new todo here"
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
});
