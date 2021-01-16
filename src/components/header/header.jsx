import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = () => (
  <header className="header">
    <Link className="header__logo-link" to="/">
      <Logo className="header__logo-image" />
    </Link>
    <nav className="header__options">
      <Link className="header__nav-link" to="/shop">
        SHOP
      </Link>
      <Link className="header__nav-link" to="/shop">
        CONTACT
      </Link>
    </nav>
  </header>
);

export default Header;
