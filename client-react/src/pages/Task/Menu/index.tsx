import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReactComponent as MenuSvg } from '../../../img/task/menu-outline.svg';
import { ReactComponent as List } from '../../../img/features/list-outline.svg';
import { ReactComponent as Add } from '../../../img/features/add-outline.svg';
import { ReactComponent as Calendar } from '../../../img/task/calendar-outline.svg';
import { ReactComponent as Home } from '../../../img/task/home-outline.svg';
import { ReactComponent as Star } from '../../../img/task/star-outline.svg';
import { ReactComponent as Sunny } from '../../../img/task/sunny-outline.svg';
import { ReactComponent as Flag } from '../../../img/features/flag-outline.svg';
import { ReactComponent as Person } from '../../../img/task/person-outline.svg';
import { TaskHeaderId } from '../../../Routes';
import { MenuItem } from './menuItem';
interface UseParams {
  id?: string;
}

const svgList = [
  {
    svg: Sunny,
    tabId: TaskHeaderId.MY_DAY,
    text: 'My Day',
  },
  {
    svg: Star,
    tabId: TaskHeaderId.IMPORTANT,
    text: 'Important',
  },
  {
    svg: Calendar,
    tabId: TaskHeaderId.PLANNED,
    text: 'Planned',
  },
  {
    svg: Person,
    tabId: TaskHeaderId.ASIGNED_TO_ME,
    text: 'Assigned to you',
  },
  {
    svg: Flag,
    tabId: TaskHeaderId.FLAGGED_EMAIL,
    text: 'Flagged email',
  },
  {
    svg: Home,
    tabId: TaskHeaderId.INBOX,
    text: 'Task',
  },
];
export const Menu = () => {
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

  const renderOptions = svgList.map((svgItem, index) => {
    return (
      <MenuItem key={index} item={svgItem} index={index} tabSelected={tabId} />
      /*
      <li
        className={`navbar__item ${tabId === svgItem.tabId ? 'active' : ''}`}
        onClick={() => setTabAndHistory(`/task/${svgItem.tabId}`)}
        key={index}
      >
        <svgItem.svg
          className={`navbar__item-icon navbar__item-icon--${index + 1}`}
        />
        <span className="navbar__item-text">{svgItem.text}</span>
      </li>
      */
    );
  });

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
            {renderOptions}
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
