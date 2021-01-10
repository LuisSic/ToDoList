import React from 'react';
import Button from '../Button/Button';
import Logo from '../../img/Logo-9.png';
import { useLocation } from 'react-router-dom';
import history from '../../helper/history';
import { Routes } from '../../Routes';
const buttonsHeader = [
  {
    text: 'Home',
    callback: (): void => history.push(Routes.HOME),
  },
  {
    text: 'Premium',
    callback: (): void => history.push(Routes.PRICING),
  },
  {
    text: 'Meet the Team',
    callback: (): void => history.push(Routes.TEAM),
  },
  {
    text: 'Support',
    callback: (): void => history.push(Routes.SUPPORT),
  },
  {
    text: 'Login',
    callback: (): void => history.push(Routes.TASK),
  },
];
export const Header = () => {
  const { pathname } = useLocation();

  if (pathname === Routes.TASK) {
    return null;
  }

  const render = buttonsHeader.map((item, index) => {
    return (
      <Button
        className="btn btn__header"
        text={item.text}
        callback={item.callback}
        key={index}
      />
    );
  });
  return (
    <header className="header">
      <img src={Logo} alt="ToDo logo" className="header-logo"></img>
      <div className="header__page-options">{render}</div>
    </header>
  );
};
