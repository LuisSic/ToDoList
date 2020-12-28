import React from 'react';
import { Link } from 'react-router-dom';

const itemsNavBar = [
  { to: '/support', text: 'Contact Us' },
  { to: '/support', text: 'Faq' },
  { to: '/', text: 'Reviews' },
  { to: '/', text: 'Blog' },
  { to: '/', text: 'Legal Stuff' },
  { to: '/', text: 'Private Policy' },
];
const Footer = () => {
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

export default Footer;
