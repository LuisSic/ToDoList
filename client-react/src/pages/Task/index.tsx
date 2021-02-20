import React from 'react';
//import { useParams } from 'react-router-dom';
import { TaskHeader } from './Header';
import { Menu } from './Menu';
import { TaskList } from '../../components/TaskList';
import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '../../components/Loader/Loader';
/*
interface UseParam {
  id?: string;
}
*/
export const Task = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="task">
        <TaskHeader />
        <div className="task__main">
          <Menu />
          <TaskList />
        </div>
      </div>
    </>
  );
};
