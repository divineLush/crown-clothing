import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, quantity, price } }) => (
  <article className="checkout-item">
    <div className="checkout-item__image-container">
      <img className="checkout-item__image" alt={ name } src={ imageUrl } />
    </div>
    <span className="checkout-item__name">{ name }</span>
    <span className="checkout-item__quantity">{ quantity }</span>
    <span className="checkout-item__price">{ price }</span>
    <button className="checkout-item__remove-btn">&#10005</button>
  </article>
);

export default CheckoutItem;
