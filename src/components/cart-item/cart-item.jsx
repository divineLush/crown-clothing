import React from 'react';

import './cart-item.scss';

const CartItem = ({ item }) => {
  const { imageUrl, price, name, quantity } = item;

  const itemPrice = (() => {
    const quantityString = quantity > 1 ? `${quantity} x ` : '';

    return `${quantityString}$${price}`;
  })();

  return (
    <article className="cart-item">
      <img
        className="cart-item__image"
        src={ imageUrl }
        alt={ name }
      />
      <footer className="cart-item__details">
        <span className="cart-item__name">{ name }</span>
        <span className="cart-item__price">{ itemPrice }</span>
      </footer>
    </article>
  );
}

export default CartItem;
