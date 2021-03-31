import React, { useState } from 'react';
import { ReactComponent as Add } from '../../img/features/add-outline.svg';
import { ReactComponent as Cirle } from '../../img/task/ellipse-outline.svg';
import { createTodo } from '../../store/actions/todos/thunk';
import { useAuth0 } from '@auth0/auth0-react';
import { useAppDispatch } from '../../store/hooks';

export const InputTaskAdd = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const { getIdTokenClaims } = useAuth0();
  const dispatch = useAppDispatch();
  const hanldeKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      if (!inputValue) {
        return;
      }
      const token = await getIdTokenClaims();
      dispatch(
        createTodo({
          todo: {
            title: inputValue,
            isImportant: false,
            isMyDay: false,
          },
          token: token.__raw,
        })
      );
      setInputValue('');
    }
  };

  return (
    <>
      <div className={`baseAdd baseAdd-${inputFocus ? 'focus' : ''}`}>
        {inputFocus ? (
          <Cirle className="baseAdd__icon" />
        ) : (
          <Add className="baseAdd__icon" />
        )}

        <input
          value={inputValue}
          className="baseAdd__input"
          type="text"
          placeholder="Add a task"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.currentTarget.value)
          }
          onKeyPress={hanldeKeyPress}
          onFocus={(event: React.FocusEvent<HTMLInputElement>) =>
            setInputFocus((prevState) => !prevState)
          }
          onBlur={(event: React.FocusEvent<HTMLInputElement>) =>
            setInputFocus((prevState) => !prevState)
          }
        />
      </div>
    </>
  );
};
