export enum TodoTypes {
  SET_TODO = 'CREATE_TODO',
  FETCH_TODOS = 'FETCH_TODOS',
  EDIT_TODO = 'EDIT_TODO',
  STATUS_LOADING = 'TODO/LOADING',
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

interface TodosLoading {
  type: TodoTypes.STATUS_LOADING;
}
export type TodoActionsTypes = SetTodo | FetchTodos | TodosLoading | EditTodo;
