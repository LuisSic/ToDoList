import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { ReactComponent as MenuSvg } from '../../../img/task/menu-outline.svg';
import { ReactComponent as Calendar } from '../../../img/task/calendar-outline.svg';
import { ReactComponent as Home } from '../../../img/task/home-outline.svg';
import { ReactComponent as Star } from '../../../img/task/star-outline.svg';
import { ReactComponent as Sunny } from '../../../img/task/sunny-outline.svg';
import { ReactComponent as Flag } from '../../../img/features/flag-outline.svg';
import { ReactComponent as Person } from '../../../img/task/person-outline.svg';
import { ReactComponent as Add } from '../../../img/features/add-outline.svg';
import { ReactComponent as List } from '../../../img/features/list-outline.svg';

interface UseParams {
  id?: string;
}
export const Menu = () => {
  const history = useHistory();
  const { id } = useParams<UseParams>();
  const [sideNavExpanded, setSideNavExpanded] = useState<boolean>(true);
  const [newList, setNewList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [tabId, setTaId] = useState<string>('inbox');

  useEffect(() => {
    if (id) {
      setTaId(id);
    }
  }, [id]);

  const hanldeKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (!inputValue) {
        return;
      }

      setNewList((oldArray) => [...oldArray, inputValue]);
      setInputValue('');
    }
  };

  const renderList = newList.map((value, index) => {
    return (
      <li className="navbar__item" key={index}>
        <List className="navbar__item-icon navbar__item-icon--morado" />
        <span className="navbar__item-text">{value}</span>
      </li>
    );
  });

  const setTabAndHistory = (path: string, tabId: string) => {
    history.push(path);
    //setTaId(tabId);
  };
  return (
    <div className={`sidebar sidebar-${sideNavExpanded ? 'expand' : 'exited'}`}>
      <div className="sidebar__header">
        <button
          className="menu"
          onClick={() => setSideNavExpanded((prevState) => !prevState)}
        >
          <MenuSvg className="hamburguerMenu" />
        </button>
      </div>
      <div className="sidebar__body">
        <div className="sidebar__body--scroll">
          <ul className="navbar">
            <li
              className={`navbar__item ${tabId === 'myday' ? 'active' : ''}`}
              onClick={() => setTabAndHistory('/task/myday', 'myday')}
            >
              <Sunny className="navbar__item-icon navbar__item-icon--1" />
              <span className="navbar__item-text">My Day</span>
            </li>
            <li
              className={`navbar__item ${
                tabId === 'important' ? 'active' : ''
              }`}
              onClick={() => setTabAndHistory('/task/important', 'important')}
            >
              <Star className="navbar__item-icon navbar__item-icon--2" />
              <span className="navbar__item-text">Important</span>
            </li>
            <li
              className={`navbar__item ${tabId === 'planned' ? 'active' : ''}`}
              onClick={() => setTabAndHistory('/task/planned', 'planned')}
            >
              <Calendar className="navbar__item-icon navbar__item-icon--3" />
              <span className="navbar__item-text">Planned</span>
            </li>
            <li
              className={`navbar__item ${
                tabId === 'assigned_to_me' ? 'active' : ''
              }`}
              onClick={() =>
                setTabAndHistory('/task/assigned_to_me', 'assigned_to_me')
              }
            >
              <Person className="navbar__item-icon navbar__item-icon--4" />
              <span className="navbar__item-text">Assigned to you</span>
            </li>
            <li
              className={`navbar__item ${
                tabId === 'flagged_email' ? 'active' : ''
              }`}
              onClick={() =>
                setTabAndHistory('/task/flagged_email', 'flagged_email')
              }
            >
              <Flag className="navbar__item-icon navbar__item-icon--5" />
              <span className="navbar__item-text">Flagged email</span>
            </li>
            <li
              className={`navbar__item ${tabId === 'inbox' ? 'active' : ''}`}
              onClick={() => setTabAndHistory('/task/inbox', 'inbox')}
            >
              <Home className="navbar__item-icon navbar__item-icon--6" />
              <span className="navbar__item-text">Task</span>
            </li>
            <div className="navbar-lastStaticList"></div>
            {renderList}
          </ul>
        </div>

        <div className="sidebar__body--addList">
          <div className="addTask">
            <Add className="addTask__icon" />
            <input
              value={inputValue}
              className="addTask__input"
              type="text"
              placeholder="New List"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.currentTarget.value)
              }
              onKeyPress={hanldeKeyPress}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
