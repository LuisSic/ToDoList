import { TaskList } from './todolist';
import { InputTaskAdd } from '../inputTaskAdd';
const dateNow = new Intl.DateTimeFormat('en-GB', {
  dateStyle: 'full',
}).format(new Date());

export const MyDay = () => {
  return (
    <div className="taskList">
      <div className="taskList-header">
        <h2 className="heading-4">My Day</h2>
        <span className="todayNow">{dateNow}</span>
      </div>

      <InputTaskAdd isMyDay={true} />
      <TaskList />
      <div className="backgroundLines"></div>
    </div>
  );
};
