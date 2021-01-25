import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-button.scss';

const CartButton = ({ toggleCartHidden, cartItems }) => {
  const itemsQuantity = cartItems.length
    ? cartItems
      .map(item => item.quantity)
      .reduce((acc, curr) => acc + curr)
    : 0;

  return (
    <button
      className="cart-button"
      title="Toggle cart dropdown"
      onClick={ toggleCartHidden }
    >
      <ShoppingIcon className="cart-button__icon" />
      <span className="cart-button__item-count">{ itemsQuantity }</span>
    </button>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
