export enum TodoTypes {
  SET_TODO = 'CREATE_TASK',
  FETCH_TODOS = 'FETCH_TASK',
  EDIT_TODO = 'EDIT_TASL',
  STATUS_LOADING = 'TODO/LOADING',
  DELETE_TODO = 'DELETE_TASK',
}

export type StatusTask = 'COMPLETED' | 'DELETED' | 'NOT_FINISH';

export interface Todo {
  id: string;
  title: string;
  isImportant: boolean;
  isMyDay: boolean;
  statusTask: StatusTask;
  createdAt: string;
  user: string;
}

interface SetTodo {
  type: TodoTypes.SET_TODO;
  payload: Todo;
}

interface FetchTodos {
  type: TodoTypes.FETCH_TODOS;
  payload: Todo[];
}

interface EditTodo {
  type: TodoTypes.EDIT_TODO;
  payload: Todo;
}

interface DeleteTodo {
  type: TodoTypes.DELETE_TODO;
  payload: string;
}

interface TodosLoading {
  type: TodoTypes.STATUS_LOADING;
}
export type TodoActionsTypes =
  | SetTodo
  | FetchTodos
  | TodosLoading
  | EditTodo
  | DeleteTodo;
