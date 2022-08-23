import {
  createTodo,
  loadTodosFailure,
  loadTodosInProgress,
  loadTodosInSuccess,
  markTodoAsCompleted,
  removeTodo,
} from "./actions";

/* In Redux, a thunk is basically a function that returns another function which contains the actual logic that we wanna perform when the thunk is triggered. */

const baseURL = "http://localhost:8080/todos";
export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch(baseURL);
    const todos = await response.json();
    console.log(todos[1]);
    dispatch(loadTodosInSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailure());
    dispatch(displayAlert(error));
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    await fetch(baseURL, {
      method: "POST",
      body: JSON.stringify({ text, isCompleted: false }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((todo) => dispatch(createTodo(todo)));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const removeTodoRequest = (id) => async (dispatch) => {
  try {
    await fetch(`${baseURL}/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then((todo) => dispatch(removeTodo(todo)));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const markTodoAsCompletedRequest = (id) => async (dispatch) => {
  try {
    console.log(`${baseURL}/${id}/completed`);
    await fetch(`${baseURL}/${id}/completed`, { method: "POST" })
      .then((response) => response.json())
      .then((todo) => dispatch(markTodoAsCompleted(todo)));
  } catch (error) {
    dispatch(displayAlert(error));
  }
};

export const displayAlert = (text) => () => {
  alert(text);
};
