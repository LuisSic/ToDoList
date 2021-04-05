import { TaskList } from './todolist';
import { InputTaskAdd } from '../inputTaskAdd';
export const Important = () => {
  return (
    <div className="taskList">
      <div className="taskList-header">
        <h2 className="heading-4">Important</h2>
      </div>
      <InputTaskAdd isImportant={true} />
      <TaskList />

      <div className="backgroundLines"></div>
    </div>
  );
};
