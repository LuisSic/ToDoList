import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todosReducer, TodoState } from './reducers/todoReducers';
import { todoListReducer, ListTodosState } from './reducers/listTodosReducer';
export interface StoreState {
  todos: TodoState;
  listTodo: ListTodosState;
}
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  listTodo: todoListReducer,
});

export const store = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
