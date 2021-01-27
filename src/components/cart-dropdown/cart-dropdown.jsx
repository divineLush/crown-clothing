import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/button.jsx';
import CartItem from '../cart-item/cart-item.jsx';

import './cart-dropdown.scss';

const CartDropdown = ({ cartItems }) => {
  const itemsList = cartItems.map((item, key) => (
    <CartItem key={ key } item={ item } />
  ));

  return (
    <section className="cart-dropdown">
      <div className="cart-dropdown__items">
        { itemsList }
      </div>
      <Button modifier="inverted">GO TO CHECKOUT</Button>
    </section>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
