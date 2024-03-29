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

export const removeTodoToList = (idTodo: string): ListActionsTypes => {
  return {
    type: ListTodoTypes.REMOVE_ID_LIST,
    payload: idTodo,
  };
};

export const updateImportantList = (updatedTodo: Todo): ListActionsTypes => {
  return {
    type: ListTodoTypes.UPDATE_TODOS_LIST_IMPORTANT,
    payload: updatedTodo,
  };
};

export const updateMyDayList = (updatedTodo: Todo): ListActionsTypes => {
  return {
    type: ListTodoTypes.UPDATE_TODOS_LIST_MYDAY,
    payload: updatedTodo,
  };
};
