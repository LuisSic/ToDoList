import { Todo } from '../todos/types';
import { ListActionsTypes, ListTodoTypes } from './types';

export const addTodoToList = (newTodo: Todo): ListActionsTypes => {
  return {
    type: ListTodoTypes.ADD_ID_LIST,
    payload: newTodo,
  };
};

export const addTodosToList = (todos: Todo[]): ListActionsTypes => {
  return {
    type: ListTodoTypes.ADD_TODOS_LIST,
    payload: todos,
  };
};

export const removeTodoToList = (newTodo: Todo): ListActionsTypes => {
  return {
    type: ListTodoTypes.REMOVE_ID_LIST,
    payload: newTodo,
  };
};
