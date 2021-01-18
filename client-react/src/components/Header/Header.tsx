import React, { useState } from 'react';
import Button from '../Button/Button';
import Logo from '../../img/Logo-9.png';
import history from '../../helper/history';
import { ReactComponent as MenuSvg } from '../../img/task/menu-outline.svg';
import { Routes } from '../../Routes';
const buttonsHeader = [
  {
    text: 'Home',
    ruta: Routes.HOME,
  },
  {
    text: 'Premium',
    ruta: Routes.PRICING,
  },
  {
    text: 'Meet the Team',
    ruta: Routes.TEAM,
  },
  {
    text: 'Support',
    ruta: Routes.SUPPORT,
  },
  {
    text: 'Login',
    ruta: `${Routes.TASK}/inbox`,
  },
];
export const Header = () => {
  const [click, setClick] = useState(false);
  const callback = (ruta: string) => {
    history.push(ruta);
    setClick(!click);
  };
  const render = buttonsHeader.map((item, index) => {
    return (
      <Button
        className="btn btn__header"
        text={item.text}
        callback={() => callback(item.ruta)}
        key={index}
      />
    );
  });
  return (
    <header className="header">
      <img src={Logo} alt="ToDo logo" className="header-logo"></img>
      <MenuSvg
        className="header__hamburguerMenu"
        onClick={() => setClick(!click)}
      />
      <div
        className={`header__nav header__nav${click ? '--active' : '--exited'}`}
      >
        {render}
      </div>
    </header>
  );
};
