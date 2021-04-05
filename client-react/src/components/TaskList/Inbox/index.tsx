import { TaskList } from './todolist';
import { InputTaskAdd } from '../inputTaskAdd';
export const Tasks = () => {
  return (
    <div className="taskList">
      <div className="taskList-header">
        <h2 className="heading-4">Tasks</h2>
      </div>
      <InputTaskAdd />
      <TaskList />

      <div className="backgroundLines"></div>
    </div>
  );
};
