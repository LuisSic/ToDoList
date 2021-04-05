import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../..';
import { todoApi } from '../../../apis/todo';
import { Todo } from './types';
import {
  setTask,
  setTasks,
  setLoading,
  editTask,
  deleteTask,
} from './creators';
import {
  addTodosToList,
  addTodoToList,
  updateImportantList,
  updateMyDayList,
  removeTodoToList,
} from '../listTodos/creators';
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
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

type typeUpdate = 'isImportant' | 'isMyDay' | 'N/A';

export const createTodo = (data: PostTodo): AppThunk => async (dispatch) => {
  try {
    const response = await todoApi.post<Todo>('/task', data.todo, {
      headers: {
        Authorization: data.token,
      },
    });

    dispatch(setTask(response.data));
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
    dispatch(setTasks(response.data));
    dispatch(addTodosToList(response.data));
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = (
  data: EditTodo,
  typeUpdate: typeUpdate
): AppThunk => async (dispatch) => {
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
    dispatch(editTask(response.data));
    if (typeUpdate === 'isImportant') {
      dispatch(updateImportantList(response.data));
    }
    if (typeUpdate === 'isMyDay') {
      dispatch(updateMyDayList(response.data));
    }
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = (idTodo: string, token: string): AppThunk => async (
  dispatch
) => {
  try {
    await todoApi.delete<Todo>(`/task/${idTodo}`, {
      headers: {
        Authorization: token,
      },
    });
    dispatch(deleteTask(idTodo));
    dispatch(removeTodoToList(idTodo));
  } catch (err) {
    console.log(err);
  }
};
