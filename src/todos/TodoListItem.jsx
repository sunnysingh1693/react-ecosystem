import React from "react";
import styled from "styled-components";

const TodoItemContainer = styled.div`
  background: #fff;
  border-radius: 8px;
  margin-top: 8px;
  padding: 16px;
  position: relative;
  box-shadow: 0 4px 8px grey;
`;

export const getBorderStyleForDate = (startingDate, currentDate) =>
  startingDate > new Date(currentDate - 86400000 * 5)
    ? "none"
    : "2px solid red";

const TodoItemContainerWithWarning = styled(TodoItemContainer)`
  border: ${(props) =>
    getBorderStyleForDate(new Date(props.createdAt), Date.now())};
`;

const Button = styled.button`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  display: inline-block;
`;

const CompletedButton = styled(Button)`
  background-color: #22ee22;
`;

const RemoveButton = styled(Button)`
  background-color: #ee2222;
  margin-left: 8px;
`;

export default function TodoListItem({
  todo,
  onRemovePressed,
  onCompletedPressed,
}) {
  const Container = todo.isCompleted
    ? TodoItemContainer
    : TodoItemContainerWithWarning;

  return (
    <Container createdAt={todo.createdAt}>
      <h3>{todo.text}</h3>
      <p>Created at: &nbsp; {new Date(todo.createdAt).toLocaleDateString()}</p>
      <div className="buttons-container">
        {!todo.isCompleted && (
          <CompletedButton onClick={() => onCompletedPressed(todo.id)}>
            Mark As Completed
          </CompletedButton>
        )}
        <RemoveButton onClick={() => onRemovePressed(todo.id)}>
          Remove
        </RemoveButton>
      </div>
    </Container>
  );
}
