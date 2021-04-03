import React, { useState } from 'react';
import Button from '../Button/Button';
import Logo from '../../img/Logo-9.png';
import history from '../../helper/history';
import { ReactComponent as MenuSvg } from '../../img/task/menu-outline.svg';
import { Routes } from '../../Routes';
import { useAuth0 } from '@auth0/auth0-react';
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
];

export const Header = () => {
  const { loginWithRedirect } = useAuth0();
  const [click, setClick] = useState(false);
  const [headerId, setHeaderId] = useState<number>(0);
  const callback = (ruta: string, index: number) => {
    history.push(ruta);
    setClick(!click);
    setHeaderId(index);
  };
  const render = buttonsHeader.map((item, index) => {
    return (
      <Button
        className={`btn btn__header ${headerId === index ? 'activate' : ''}`}
        text={item.text}
        callback={() => callback(item.ruta, index)}
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
      <div className={`header__nav header__nav${click ? '--active' : ''}`}>
        {render}
        <Button
          className="btn btn__header"
          text="Login"
          callback={() => loginWithRedirect()}
        />
      </div>
    </header>
  );
};
