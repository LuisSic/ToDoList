import { useAuth0, LogoutOptions } from '@auth0/auth0-react';
import { useRef } from 'react';
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu';

const logoutOptions: LogoutOptions = {
  returnTo: window.location.origin,
};
export const TaskHeader = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  const { openMenu, closeMenu, toggleMenu, ...menuProps } = useMenuState();
  const ref = useRef(null);

  return (
    <header className="task__header">
      <span className="task__header-title">To Do</span>
      <nav className="user-nav">
        <img
          src={user.picture}
          alt="User"
          className="user-nav__user-photo"
          ref={ref}
          onClick={() => openMenu()}
        />
        <ControlledMenu
          {...menuProps}
          anchorRef={ref}
          onClose={() => closeMenu()}
          direction="bottom"
          arrow={true}
          align="center"
          className="menu-container"
        >
          <MenuItem className="menu-item">
            <span className="user-nav__user--text">{user.name}</span>
          </MenuItem>
          <MenuItem className="menu-item">
            <span className="user-nav__user--text">{user.email}</span>
          </MenuItem>
          <MenuItem className="menu-item" onClick={() => logout(logoutOptions)}>
            {isAuthenticated ? (
              <span className="user-nav__user--text">Sign Out</span>
            ) : (
              ''
            )}
          </MenuItem>
        </ControlledMenu>
      </nav>
    </header>
  );
};
