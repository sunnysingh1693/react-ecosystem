import React from "react";
import { hot } from "react-hot-loader";
import styled from "styled-components";
import TodoList from "./todos/TodoList";

const AppContainer = styled.div`
  margin: 1rem;
  font-family: Arial, serif;
  color: #222222;
`;

const App = (first) => (
  <AppContainer>
    <h1>Todo App</h1>
    <TodoList />
  </AppContainer>
);

export default hot(module)(App);
