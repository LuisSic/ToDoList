import { useEffect } from 'react';
import { TaskHeader } from './Header';
import { Menu } from './Menu';
import { Tasks } from '../../components/TaskList/Inbox';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '../../components/Loader/Loader';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { fetchTodos } from '../../store/actions/todos/thunk';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { TaskHeaderId } from '../../Routes';
import { Planned } from '../../components/TaskList/Planned';
import { AssignedToYou } from '../../components/TaskList/AssignedToYou';
import { MyDay } from '../../components/TaskList/MyDay';
import { Important } from '../../components/TaskList/Important';
export const Task = () => {
  const { isLoading, getIdTokenClaims } = useAuth0();
  const status = useAppSelector((state) => state.todos.status);
  const dispatch = useAppDispatch();
  let { path } = useRouteMatch();

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
          <Switch>
            <Route exact path={`${path}/${TaskHeaderId.ASIGNED_TO_ME}`}>
              <AssignedToYou />
            </Route>
            <Route exact path={`${path}/${TaskHeaderId.IMPORTANT}`}>
              <Important />
            </Route>
            <Route exact path={`${path}/${TaskHeaderId.MY_DAY}`}>
              <MyDay />
            </Route>
            <Route exact path={`${path}/${TaskHeaderId.PLANNED}`}>
              <Planned />
            </Route>
            <Route exact path={`${path}/${TaskHeaderId.INBOX}`}>
              <Tasks />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};
