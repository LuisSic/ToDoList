import { Todo } from '../todos/types';
export enum ListTodoTypes {
  ADD_ID_LIST = 'ADD_ID_LIST',
  REMOVE_ID_LIST = 'REMOVE_ID_LIST',
  ADD_TODOS_LIST = 'ADD_TODOS_LIST',
  UPDATE_TODOS_LIST_IMPORTANT = 'UPDATE_TODOS_LIST_IMPORTANT',
  UPDATE_TODOS_LIST_MYDAY = 'UPDATE_TODOS_LIST_MYDAY',
}

interface AddIdList {
  type: ListTodoTypes.ADD_ID_LIST;
  payload: Todo;
}

interface RemoveIdList {
  type: ListTodoTypes.REMOVE_ID_LIST;
  payload: string;
}

interface AddTodosList {
  type: ListTodoTypes.ADD_TODOS_LIST;
  payload: Todo[];
}

interface UpdateTodosListImportant {
  type: ListTodoTypes.UPDATE_TODOS_LIST_IMPORTANT;
  payload: Todo;
}

interface UpdateTodosListMyDay {
  type: ListTodoTypes.UPDATE_TODOS_LIST_MYDAY;
  payload: Todo;
}
export type ListActionsTypes =
  | RemoveIdList
  | AddIdList
  | AddTodosList
  | UpdateTodosListImportant
  | UpdateTodosListMyDay;
