import React from 'react';

import { TaskList } from './todolist';
import { InputTaskAdd } from './inputTaskAdd';
export const Tasks = () => {
  return (
    <div className="taskList">
      <h2 className="heading-4">Tasks</h2>
      <InputTaskAdd />
      <TaskList />

      <div className="backgroundLines"></div>
    </div>
  );
};
