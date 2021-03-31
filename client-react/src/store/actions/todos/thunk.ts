import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../..';
import { todoApi } from '../../../apis/todo';
import { Todo } from './types';
import { setTodo, setTodos, setLoading, editTodo } from './creators';
import { addTodosToList, addTodoToList } from '../listTodos/creators';
type AppThunk<ReturnType = void> = ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
>;

interface PostTodo {
  todo: {
    title: string;
    isImportant: boolean;
    isMyDay: boolean;
  };
  token: string;
}

interface EditTodo {
  todo: {
    id: string;
    statusTask: string;
    isImportant: boolean;
    isMyDay: boolean;
  };
  token: string;
}

export const createTodo = (data: PostTodo): AppThunk => async (dispatch) => {
  try {
    const response = await todoApi.post<Todo>('/task', data.todo, {
      headers: {
        Authorization: data.token,
      },
    });

    dispatch(setTodo(response.data));
    dispatch(addTodoToList(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const fetchTodos = (token: string): AppThunk => async (
  dispatch,
  getState
) => {
  try {
    const todos = getState().todos.todos;
    if (Object.keys(todos).length > 0) {
      return;
    }
    dispatch(setLoading());
    const response = await todoApi.get<Todo[]>('/tasks', {
      headers: {
        Authorization: token,
      },
    });
    dispatch(setTodos(response.data));
    dispatch(addTodosToList(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = (data: EditTodo): AppThunk => async (dispatch) => {
  try {
    const response = await todoApi.put<Todo>(
      `/task/${data.todo.id}`,
      data.todo,
      {
        headers: {
          Authorization: data.token,
        },
      }
    );

    dispatch(editTodo(response.data));
  } catch (err) {
    console.log(err);
  }
};
