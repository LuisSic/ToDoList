import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="nav">
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Contact Us
            </a>
          </li>
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Faq
            </a>
          </li>
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Reviews
            </a>
          </li>
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Blog
            </a>
          </li>
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Legal Stuff
            </a>
          </li>
          <li className="nav__item">
            <a href="/#" className="nav__link">
              Private Policy
            </a>
          </li>
        </ul>
        <p className="footer__copyright">
          Copyright © 2017-2020 To Do, LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
