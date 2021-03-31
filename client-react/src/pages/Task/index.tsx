import React, { useEffect } from 'react';
//import { useParams } from 'react-router-dom';
import { TaskHeader } from './Header';
import { Menu } from './Menu';
import { Tasks } from '../../components/TaskList';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '../../components/Loader/Loader';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchTodos } from '../../store/actions/todos/thunk';
/*
interface UseParam {
  id?: string;
}
*/
export const Task = () => {
  const { isLoading, getIdTokenClaims } = useAuth0();
  const status = useAppSelector((state) => state.todos.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getTodos = async () => {
      const token = await getIdTokenClaims();
      dispatch(fetchTodos(token.__raw));
    };
    getTodos();
  }, [dispatch, getIdTokenClaims]);

  if (isLoading || status === 'loading') {
    return <Spinner />;
  }

  return (
    <>
      <div className="task">
        <TaskHeader />
        <div className="task__main">
          <Menu />
          <Tasks />
        </div>
      </div>
    </>
  );
};
