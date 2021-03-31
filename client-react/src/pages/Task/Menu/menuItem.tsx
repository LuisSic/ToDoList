import React from 'react';
import { useHistory } from 'react-router-dom';
import { TaskHeaderId } from '../../../Routes';
import { useAppSelector } from '../../../store/hooks';
interface MenuItemProps {
  item: {
    svg: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    tabId: TaskHeaderId;
    text: string;
  };
  index: number;
  tabSelected: string;
}
export const MenuItem = ({ item, tabSelected, index }: MenuItemProps) => {
  const history = useHistory();
  const cantItems = useAppSelector((state) => {
    switch (item.tabId) {
      case TaskHeaderId.ASIGNED_TO_ME:
        return state.listTodo.assigned_to_me;
      case TaskHeaderId.FLAGGED_EMAIL:
        return state.listTodo.flagged;
      case TaskHeaderId.IMPORTANT:
        return state.listTodo.important;
      case TaskHeaderId.INBOX:
        return state.listTodo.all;
      case TaskHeaderId.MY_DAY:
        return state.listTodo.myDay;
      case TaskHeaderId.PLANNED:
        return state.listTodo.planned;
    }
  });
  const setTabAndHistory = (path: string) => {
    history.push(path);
  };

  return (
    <li
      className={`navbar__item ${tabSelected === item.tabId ? 'active' : ''}`}
      onClick={() => setTabAndHistory(`/task/${item.tabId}`)}
      key={index}
    >
      <item.svg
        className={`navbar__item-icon navbar__item-icon--${index + 1}`}
      />
      <span className="navbar__item-text">{item.text}</span>
      {cantItems.length > 0 ? (
        <span className="navbar__item-cant">{cantItems.length}</span>
      ) : null}
    </li>
  );
};
