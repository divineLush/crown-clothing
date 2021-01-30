import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selector.js';

import CartItem from '../cart-item/cart-item.jsx';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => {
  const itemsList = cartItems.map((item, key) => (
    <CartItem key={ key } item={ item } />
  ));

  const emptyMessage = (
    <span className="cart-dropdown__empty-message">
      Your cart is empty
    </span>
  );

  const content = cartItems.length ? itemsList : emptyMessage;

  return (
    <section className="cart-dropdown">
      <div className="cart-dropdown__items">
        { content }
      </div>
      <Link
        className="cart-dropdown__link"
        to="/checkout"
      >
        GO TO CHECKOUT
      </Link>
    </section>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
