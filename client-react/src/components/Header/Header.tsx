import React from 'react';
import Button from '../Button/Button';
import Logo from '../../img/Logo-9.png';
import history from '../../helper/history';
const buttonsHeader = [
  {
    text: 'Home',
    callback: (): void => history.push('/'),
  },
  {
    text: 'Premium',
    callback: (): void => history.push('/pricing'),
  },
  {
    text: 'Meet the Team',
    callback: (): void => history.push('/team'),
  },
  {
    text: 'Support',
    callback: (): void => history.push('/support'),
  },
  {
    text: 'Login',
    callback: (): void => history.push('/'),
  },
];
const Header = () => {
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

export default Header;
