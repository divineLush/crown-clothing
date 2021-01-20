import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-button.scss';

const CartButton = () => (
  <button className="cart-button">
    <ShoppingIcon className="cart-button__icon" />
    <span className="cart-button__item-count">0</span>
  </button>
);

export default CartButton;
