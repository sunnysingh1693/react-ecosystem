import React, { useEffect } from "react";
import { connect } from "react-redux";
import NewTodoForm from "./NewTodoForm";
import {
  getCompletedTodos,
  getIncompletedTodos,
  getTodosLoading,
} from "./selectors";
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompletedRequest,
} from "./thunks";
import TodoListItem from "./TodoListItem";

const TodoList = ({
  completedTodos,
  inCompletedTodos,
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
      <h3>Incomplete:</h3>
      {inCompletedTodos.map((todo, index) => (
        <TodoListItem
          todo={todo}
          key={index}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Complete:</h3>
      {completedTodos.map((todo, index) => (
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
  completedTodos: getCompletedTodos(state),
  inCompletedTodos: getIncompletedTodos(state),
  isLoading: getTodosLoading(state),
});

export const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
  startLoadingTodos: () => dispatch(loadTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
