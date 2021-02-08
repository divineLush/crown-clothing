import React from 'react';
import { connect } from 'react-redux';

import { clearItemFromCart } from '../../redux/cart/cart.actions.js';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem, clearItem }) => {
  const { name, imageUrl, quantity, price, id } = cartItem;
  const btnTitle = `Remove ${name} from cart`;

  return (
    <article className="checkout-item">
      <div className="checkout-item__image-container">
        <img className="checkout-item__image" alt={ name } src={ imageUrl } />
      </div>
      <span className="checkout-item__name">{ name }</span>
      <span className="checkout-item__quantity">{ quantity }</span>
      <span className="checkout-item__price">{ price }</span>
      <button
        className="checkout-item__remove-btn"
        title={ btnTitle }
        onClick={ () => clearItem(id) }
      >&#10005;</button>
    </article>
  );
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
