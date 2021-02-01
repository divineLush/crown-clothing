import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartItems } from '../../redux/cart/cart.selector.js';

import CheckoutItem from '../checkout-item/checkout-item.jsx';

import './checkout-items-list.scss';

const CheckoutItemsList = ({ cartItems }) => {
  const checkoutItems = cartItems.map((item, key) => (
    <CheckoutItem key={ key } cartItem={ item } />
  ));

  return (
    <section className="checkout-items">
      { checkoutItems }
    </section>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CheckoutItemsList);
