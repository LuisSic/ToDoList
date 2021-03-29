import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  todos: () => 'HOLA',
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
