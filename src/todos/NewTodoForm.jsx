import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "./thunks";
import { getTodos } from "./selectors";
import styled from "styled-components";

const NewTodoFormContainer = styled.div`
  border-radius: 8px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px grey;
`;

const NewTodoInput = styled.input`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ddd;
  border-radius: 8px;
  width: 70%;
  outline: none;
`;

const NewTodoButton = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  margin-left: 8px;
  width: 20%;
  background-color: #22ee22;
`;

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
    <NewTodoFormContainer>
      <NewTodoInput
        type="title"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type your new todo here"
      />
      <NewTodoButton
        type="submit"
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
      </NewTodoButton>
    </NewTodoFormContainer>
  );
});
