import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "./thunks";
import "./NewTodoForm.css";
import { getTodos } from "./selectors";

export const mapStateToProps = (state) => ({
  todos: getTodos(state),
});
export const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (title) => dispatch(addTodoRequest(title)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(function NewTodoForm({ todos, onCreatePressed }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="new-todo-form">
      <input
        type="title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="new-todo-input"
        placeholder="Type your new todo here"
      />
      <button
        type="submit"
        className="new-todo-button"
        onClick={() => {
          const isDuplicatetitle = todos.some(
            (todo) => todo.title === inputValue
          );
          if (!isDuplicatetitle) {
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
