import React from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils.js';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.scss';

const Header = ({ currentUser }) => {
  const signLink = (() => {
    const signOut = (
      <button
        className="header__sign-out-btn"
        onClick={ () => { auth.signOut(); } }
      >
        SIGN OUT
      </button>
    );

    const signIn = (
      <Link className="header__nav-link" to="/sign-in">SIGN IN</Link>
    );

    return currentUser ? signOut : signIn
  })();

  return (
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
        { signLink }
      </nav>
    </header>
  );
}

export default Header;
