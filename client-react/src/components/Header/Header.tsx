import React from 'react';
import Button from '../Button/Button';
import Logo from '../../img/Logo-5.png';

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="ToDo logo" className="header-logo"></img>
      <div className="header__page-options">
        <Button
          className="btn btn__header"
          text="Meet the Team"
          callback={() => console.log('click')}
        />
        <Button
          className="btn btn__header"
          text="Login"
          callback={() => console.log('click')}
        />
      </div>
    </header>
  );
};

export default Header;
