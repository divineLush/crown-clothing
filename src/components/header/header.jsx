import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils.js';

import { selectCartHidden } from '../../redux/cart/cart.selector.js';
import { selectCurrentUser } from '../../redux/user/user.selector.js';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartButton from '../cart-button/cart-button.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.jsx';

import './header.scss';

const Header = ({ currentUser, isHidden }) => {
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
        <CartButton />
      </nav>
      {
        isHidden ? null : <CartDropdown />
      }
    </header>
  );
}

// state is a rootReducer
// createStructuredSelector allows to avoid the dirty situation below
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isHidden: selectCartHidden,
});
// const mapStateToProps = state => ({
//   currentUser: selectCurrentUser(state),
//   isHidden: selectCartHidden(state),
// });

// first argument allows to acces state (rootReducer)
export default connect(mapStateToProps)(Header);
