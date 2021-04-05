import '@szhsin/react-menu/dist/index.css';
import { useRef } from 'react';
import { ControlledMenu, MenuItem, useMenuState } from '@szhsin/react-menu';
import { DropdownItem } from './menuItem';
import { ReactComponent as Sunny } from '../../img/task/sunny-outline.svg';
import { ReactComponent as MenuOption } from '../../img/task/ellipsis-horizontal-outline.svg';
import { ReactComponent as Trash } from '../../img/task/trash-outline.svg';
import { ReactComponent as Star } from '../../img/task/star-outline.svg';
import { ReactComponent as CheckOutline } from '../../img/task/ellipse-outline.svg';
import { ReactComponent as Check } from '../../img/task/checkmark-outline.svg';
import { Todo } from '../../store/actions/todos/types';

interface PopUpMenuProps {
  todo: Todo;
  callbackMyDay: () => void;
  callbackImportant: () => void;
  callbackCompleted: () => void;
  callbackDelete: () => void;
}
export const PopUpMenu = ({
  todo,
  callbackCompleted,
  callbackImportant,
  callbackMyDay,
  callbackDelete,
}: PopUpMenuProps) => {
  const { openMenu, closeMenu, toggleMenu, ...menuProps } = useMenuState();
  const ref = useRef(null);
  return (
    <>
      <MenuOption
        className="icon-small tasks__item-arrowMenu"
        ref={ref}
        onClick={() => openMenu()}
      />
      <ControlledMenu
        {...menuProps}
        anchorRef={ref}
        onClose={() => closeMenu()}
        direction="left"
        arrow={true}
        align="center"
        className="menu-container"
      >
        <MenuItem onClick={callbackMyDay} className="menu-item">
          {todo.isMyDay ? (
            <DropdownItem text="Remove From My Day" Svg={Sunny} />
          ) : (
            <DropdownItem text="Add to My Day" Svg={Sunny} />
          )}
        </MenuItem>
        <MenuItem onClick={callbackImportant} className="menu-item">
          {todo.isImportant ? (
            <DropdownItem text="Remove Importance" Svg={Star} />
          ) : (
            <DropdownItem text="Mark as Important" Svg={Star} />
          )}
        </MenuItem>
        <MenuItem onClick={callbackCompleted} className="menu-item">
          {todo.statusTask === 'NOT_FINISH' ? (
            <DropdownItem text="Mark as Completed" Svg={Check} />
          ) : (
            <DropdownItem text="Mark as not Completed" Svg={CheckOutline} />
          )}
        </MenuItem>
        <MenuItem
          className="menu-item menu-item--delete"
          onClick={callbackDelete}
        >
          <DropdownItem text="Delete Task" Svg={Trash} />
        </MenuItem>
      </ControlledMenu>
    </>
  );
};
