import { Todo } from '../todos/types';
export enum ListTodoTypes {
  ADD_ID_LIST = 'ADD_ID_LIST',
  REMOVE_ID_LIST = 'REMOVE_ID_LIST',
  ADD_TODOS_LIST = 'ADD_TODOS_LIST',
}

interface AddIdList {
  type: ListTodoTypes.ADD_ID_LIST;
  payload: Todo;
}

interface RemoveIdList {
  type: ListTodoTypes.REMOVE_ID_LIST;
  payload: Todo;
}

interface AddTodosList {
  type: ListTodoTypes.ADD_TODOS_LIST;
  payload: Todo[];
}
export type ListActionsTypes = RemoveIdList | AddIdList | AddTodosList;
