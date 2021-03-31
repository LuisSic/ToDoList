import { TodoTypes, TodoActionsTypes, Todo } from './types';

export const setTodo = (newTodo: Todo): TodoActionsTypes => {
  return {
    type: TodoTypes.SET_TODO,
    payload: newTodo,
  };
};

export const setTodos = (todos: Todo[]): TodoActionsTypes => {
  return {
    type: TodoTypes.FETCH_TODOS,
    payload: todos,
  };
};

export const setLoading = (): TodoActionsTypes => {
  return {
    type: TodoTypes.STATUS_LOADING,
  };
};

export const editTodo = (newTodo: Todo): TodoActionsTypes => {
  return {
    type: TodoTypes.EDIT_TODO,
    payload: newTodo,
  };
};
