import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { updateTodo, deleteTodo } from '../../store/actions/todos/thunk';
import { ReactComponent as Cirle } from '../../img/task/ellipse-outline.svg';
import { ReactComponent as Check } from '../../img/task/checkmark-outline.svg';
import { ReactComponent as Star } from '../../img/task/star-outline.svg';
import { ReactComponent as CheckFill } from '../../img/task/checkmark-circle-fill.svg';
import { ReactComponent as StarFilled } from '../../img/task/star-fillled.svg';
import { PopUpMenu } from '../PopUpMenu/PopUpMenu';

interface TodoItemProps {
  id: string;
}

const audio = new Audio('/completed.mp3');

export const TodoItem = ({ id }: TodoItemProps) => {
  const { getIdTokenClaims } = useAuth0();
  const [token, setToken] = useState('');
  const todo = useAppSelector((state) => state.todos.todos[id]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const getToken = async () => {
      const token = await getIdTokenClaims();
      setToken(token.__raw);
    };
    console.log('se ejecuto obtener token');
    getToken();
  }, [getIdTokenClaims]);

  const handleClick = async () => {
    let status = '';
    if (todo.statusTask === 'NOT_FINISH') {
      try {
        audio.play();
      } catch (error) {
        console.log(error);
      }
      status = 'COMPLETED';
    } else {
      status = 'NOT_FINISH';
    }

    dispatch(
      updateTodo(
        {
          todo: {
            statusTask: status,
            isMyDay: todo.isMyDay,
            isImportant: todo.isImportant,
            id: todo.id,
          },
          token,
        },
        'N/A'
      )
    );
  };

  const handleClickStar = async () => {
    dispatch(
      updateTodo(
        {
          todo: {
            statusTask: todo.statusTask,
            isMyDay: todo.isMyDay,
            isImportant: !todo.isImportant,
            id: todo.id,
          },
          token: token,
        },
        'isImportant'
      )
    );
  };

  const handleClickMyDay = async () => {
    dispatch(
      updateTodo(
        {
          todo: {
            statusTask: todo.statusTask,
            isMyDay: !todo.isMyDay,
            isImportant: todo.isImportant,
            id: todo.id,
          },
          token,
        },
        'isMyDay'
      )
    );
  };

  const handleDeleteTask = async () => {
    dispatch(deleteTodo(todo.id, token));
  };

  if (!todo) {
    return null;
  }

  return (
    <>
      <div className="tasks__item">
        <div className="tasks__item-icons" onClick={handleClick}>
          {todo.statusTask === 'NOT_FINISH' ? (
            <>
              <Cirle className="icon-small icon icon--cirleOutline" />
              <Check className="icon icon--circleCheck" />
            </>
          ) : (
            <CheckFill className="icon-small icon icon--circleCompleted" />
          )}
        </div>
        <button className="tasks__item-btn">
          <span className={todo.statusTask === 'COMPLETED' ? 'completed' : ''}>
            {todo.title}
          </span>
        </button>
        {todo.isImportant ? (
          <StarFilled
            className="icon-small tasks__item-importanceCompleted"
            onClick={handleClickStar}
          />
        ) : (
          <Star
            className="icon-small tasks__item-importanceButton"
            onClick={handleClickStar}
          />
        )}
        <PopUpMenu
          todo={todo}
          callbackCompleted={handleClick}
          callbackImportant={handleClickStar}
          callbackMyDay={handleClickMyDay}
          callbackDelete={handleDeleteTask}
        />
      </div>
    </>
  );
};
