import _ from 'lodash';
import { TodoActionsTypes, Todo, TodoTypes } from '../actions/todos/types';

type statusRequest = 'idle' | 'loading' | 'succeeded' | 'failed';
export interface TodoState {
  todos: { [key: string]: Todo };
  status: statusRequest;
}
const initialState: TodoState = {
  todos: {},
  status: 'idle',
};

export const todosReducer = (
  state = initialState,
  action: TodoActionsTypes
): TodoState => {
  switch (action.type) {
    case TodoTypes.SET_TODO:
      return {
        ...state,
        todos: { ...state.todos, [action.payload.id]: action.payload },
      };
    case TodoTypes.FETCH_TODOS:
      return {
        ...state,
        todos: _.mapKeys(action.payload, 'id'),
        status: 'idle',
      };
    case TodoTypes.EDIT_TODO:
      return {
        ...state,
        todos: { ...state.todos, [action.payload.id]: action.payload },
      };
    case TodoTypes.STATUS_LOADING:
      return { ...state, status: 'loading' };
    default:
      return state;
  }
};
