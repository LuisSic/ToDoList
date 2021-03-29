import React, { useState } from 'react';
import { ReactComponent as Add } from '../../img/features/add-outline.svg';
import { ReactComponent as Cirle } from '../../img/task/ellipse-outline.svg';
import { ReactComponent as Check } from '../../img/task/checkmark-outline.svg';
import { ReactComponent as Star } from '../../img/task/star-outline.svg';
export const TaskList = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [inputFocus, setInputFocus] = useState<boolean>(false);
  const [listTask, setListTask] = useState<string[]>([]);
  const hanldeKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      if (!inputValue) {
        return;
      }
      setListTask((oldArray) => [...oldArray, inputValue]);
      setInputValue('');
    }
  };

  const renderTasks = listTask.map((task) => {
    return (
      <div className="tasks__item">
        <div className="tasks__item-icons">
          <Cirle className="icon icon--cirleOutline" />
          <Check className="icon icon--circleCheck" />
        </div>
        <button className="tasks__item-btn">{task}</button>
        <Star className="tasks__item-importanceButton" />
      </div>
    );
  });

  return (
    <div className="taskList">
      <h2 className="heading-4">Tasks</h2>
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
      <div className="tasks">{renderTasks}</div>
      <div className="backgroundLines"></div>
    </div>
  );
};
