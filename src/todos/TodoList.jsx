import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "./thunks";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  todos,
  isLoading,
  onRemovePressed,
  onCompletedPressed,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading todos...!!!</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

export const mapStateToProps = (state) => ({
  todos: state.todos,
  isLoading: state.isLoading,
});

export const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
