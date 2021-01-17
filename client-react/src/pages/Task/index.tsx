import React from 'react';
import { useParams } from 'react-router-dom';
import { TaskHeader } from './Header';
import { Menu } from './Menu';
import { TaskList } from '../../components/TaskList';
interface UseParam {
  id?: string;
}
export const Task = () => {
  const { id } = useParams<UseParam>();
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
