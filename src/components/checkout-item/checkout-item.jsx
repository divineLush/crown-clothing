import React from 'react';
import { connect } from 'react-redux';

import {
  addItem,
  removeItem,
  clearItemFromCart,
} from '../../redux/cart/cart.actions.js';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  const btnTitle = `Remove ${name} from cart`;

  return (
    <article className="checkout-item">
      <div className="checkout-item__image-container">
        <img className="checkout-item__image" alt={ name } src={ imageUrl } />
      </div>
      <span className="checkout-item__name">{ name }</span>
      <div className="checkout-item__quantity">
        <button
          className="checkout-item__arrow-btn"
          onClick={ () => removeItem(cartItem) }
        >
          &#10094;
        </button>
        <span>{ quantity }</span>
        <button
          className="checkout-item__arrow-btn"
          onClick={ () => addItem(cartItem) }
        >
          &#10095;
        </button>
      </div>
      <span className="checkout-item__price">{ price }</span>
      <button
        className="checkout-item__remove-btn"
        title={ btnTitle }
        onClick={ () => clearItem(cartItem) }
      >&#10005;</button>
    </article>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
