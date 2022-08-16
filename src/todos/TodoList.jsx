import React from "react";
import { connect } from "react-redux";
import { markTodoAsCompleted, removeTodo } from "./actions";
import NewTodoForm from "./NewTodoForm";
import TodoListItem from "./TodoListItem";

const TodoList = ({ todos, onRemovePressed, onCompletedPressed }) => {
  return (
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
};

export const mapStateToProps = (state) => ({
  todos: state.todos,
});

export const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
