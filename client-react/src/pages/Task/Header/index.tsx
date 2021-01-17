import User from '../../../img/team/luis.jpg';
export const TaskHeader = () => {
  return (
    <header className="task__header">
      <span className="task__header-title">To Do</span>
      <nav className="user-nav">
        <img src={User} alt="User" className="user-nav__user-photo" />
        <span className="user-nav__user-name">Luis</span>
      </nav>
    </header>
  );
};
