import React from 'react';

import Button from '../button/button.jsx';

import './cart-dropdown.scss';

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-dropdown__items"></div>
    <Button modifier="cart">GO TO CHECKOUT</Button>
  </div>
);

export default CartDropdown;
