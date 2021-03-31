import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { TodoItem } from './todoItem';
import { shallowEqual } from 'react-redux';
export const TaskList = () => {
  const todos = useAppSelector((state) => state.listTodo.all, shallowEqual);

  const renderTasks = todos.map((taskId) => {
    return <TodoItem key={taskId} id={taskId} />;
  });
  return (
    <>
      <div className="tasks">{renderTasks}</div>
    </>
  );
};
