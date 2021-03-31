import { ListTodoTypes, ListActionsTypes } from '../actions/listTodos/types';

export interface ListTodosState {
  important: string[];
  planned: string[];
  all: string[];
  completed: string[];
  flagged: string[];
  assigned_to_me: string[];
  myDay: string[];
}
const initialState: ListTodosState = {
  important: [],
  planned: [],
  all: [],
  completed: [],
  flagged: [],
  assigned_to_me: [],
  myDay: [],
};

export const todoListReducer = (
  state = initialState,
  action: ListActionsTypes
): ListTodosState => {
  switch (action.type) {
    case ListTodoTypes.ADD_ID_LIST:
      if (action.payload.isMyDay) {
        return {
          ...state,
          all: [...state.all, action.payload.id],
          myDay: [...state.myDay, action.payload.id],
        };
      }
      if (action.payload.isImportant) {
        return {
          ...state,
          all: [...state.all, action.payload.id],
          important: [...state.important, action.payload.id],
        };
      }

      return {
        ...state,
        all: [...state.all, action.payload.id],
      };
    case ListTodoTypes.ADD_TODOS_LIST:
      let important: string[] = [];
      let all: string[] = [];
      let myDay: string[] = [];
      action.payload.forEach((todo) => {
        if (todo.isImportant) {
          important.push(todo.id);
        }
        if (todo.isMyDay) {
          myDay.push(todo.id);
        }
        all.push(todo.id);
      });
      return {
        ...state,
        important,
        all,
        myDay,
      };
    case ListTodoTypes.REMOVE_ID_LIST:
      return {
        ...state,
      };
    default:
      return state;
  }
};
