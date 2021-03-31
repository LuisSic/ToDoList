import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { ReactComponent as Cirle } from '../../img/task/ellipse-outline.svg';
import { ReactComponent as Check } from '../../img/task/checkmark-outline.svg';
import { ReactComponent as Star } from '../../img/task/star-outline.svg';
import { ReactComponent as CheckFill } from '../../img/task/checkmark-circle-fill.svg';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { updateTodo } from '../../store/actions/todos/thunk';

interface TodoItemProps {
  id: string;
}
export const TodoItem = ({ id }: TodoItemProps) => {
  const { getIdTokenClaims } = useAuth0();
  const [audio] = useState(new Audio('/completed.mp3'));
  const todo = useAppSelector((state) => state.todos.todos[id]);
  const dispatch = useAppDispatch();

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

    const token = await getIdTokenClaims();
    dispatch(
      updateTodo({
        todo: {
          statusTask: status,
          isMyDay: todo.isMyDay,
          isImportant: todo.isImportant,
          id: todo.id,
        },
        token: token.__raw,
      })
    );
  };
  return (
    <>
      <div className="tasks__item">
        <div className="tasks__item-icons" onClick={handleClick}>
          {todo.statusTask === 'NOT_FINISH' ? (
            <>
              <Cirle className="icon icon--cirleOutline" />
              <Check className="icon icon--circleCheck" />
            </>
          ) : (
            <CheckFill className="icon icon--circleCompleted" />
          )}
        </div>
        <button className="tasks__item-btn">{todo.title}</button>
        <Star className="tasks__item-importanceButton" />
      </div>
    </>
  );
};