import { TodoTypes, TodoActionsTypes, Todo } from './types';

export const setTask = (newTodo: Todo): TodoActionsTypes => {
  return {
    type: TodoTypes.SET_TODO,
    payload: newTodo,
  };
};

export const setTasks = (todos: Todo[]): TodoActionsTypes => {
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

export const editTask = (newTodo: Todo): TodoActionsTypes => {
  return {
    type: TodoTypes.EDIT_TODO,
    payload: newTodo,
  };
};

export const deleteTask = (id: string): TodoActionsTypes => {
  return {
    type: TodoTypes.DELETE_TODO,
    payload: id,
  };
};
