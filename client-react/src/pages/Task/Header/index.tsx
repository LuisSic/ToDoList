import { useAuth0, LogoutOptions } from '@auth0/auth0-react';

const logoutOptions: LogoutOptions = {
  returnTo: window.location.origin,
};
export const TaskHeader = () => {
  const { isAuthenticated, user, logout } = useAuth0();

  return (
    <header className="task__header">
      <span className="task__header-title">To Do</span>
      <nav className="user-nav">
        <img src={user.picture} alt="User" className="user-nav__user-photo" />
        <span className="user-nav__user-name">{user.name}</span>
        <button className="user_nav" onClick={() => logout(logoutOptions)}>
          {isAuthenticated ? <span>Log Out</span> : ''}
        </button>
      </nav>
    </header>
  );
};
