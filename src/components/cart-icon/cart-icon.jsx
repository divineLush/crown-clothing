import React from 'react';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon.scss';

const CartIcon = () => (
  <div className="cart-icon">
    <ShoppingIcon className="cart-icon__icon" />
    <span className="cart-icon__item-count">0</span>
  </div>
);

export default CartIcon;
