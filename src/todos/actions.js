export const CREATE_TODO = "CREATE_TODO";
export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const REMOVE_TODO = "REMOVE_TODO";
export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
});

export const MARK_TODO_AS_COMPLETED = "MARK_COMPLETE_TODO";
export const markTodoAsCompleted = (todo) => ({
  type: MARK_TODO_AS_COMPLETED,
  payload: { todo },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS";
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = "LOAD_TODOS_IN_SUCCESS";
export const loadTodosInSuccess = (todos) => ({
  type: LOAD_TODOS_SUCCESS,
  payload: { todos },
});

export const LOAD_TODOS_FAILURE = "LOAD_TODOS_FAILURE";
export const loadTodosFailure = () => ({
  type: LOAD_TODOS_FAILURE,
});
