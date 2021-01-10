import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Routes } from '../../Routes';

const itemsNavBar = [
  { to: Routes.SUPPORT, text: 'Contact Us' },
  { to: Routes.SUPPORT, text: 'Faq' },
  { to: Routes.HOME, text: 'Reviews' },
  { to: Routes.HOME, text: 'Blog' },
  { to: Routes.HOME, text: 'Legal Stuff' },
  { to: Routes.HOME, text: 'Private Policy' },
];

export const Footer = () => {
  const { pathname } = useLocation();

  if (pathname === Routes.TASK) {
    return null;
  }

  const render = itemsNavBar.map((item, index) => {
    return (
      <li className="nav__item" key={index}>
        <Link to={item.to} className="nav__link">
          {item.text}
        </Link>
      </li>
    );
  });
  return (
    <footer className="footer">
      <ul className="nav">{render}</ul>
      <p className="copyright">
        Copyright © 2017-2020 To Do, LLC. All rights reserved.
      </p>
    </footer>
  );
};
