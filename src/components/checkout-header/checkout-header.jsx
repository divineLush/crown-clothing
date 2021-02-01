import React from 'react';

import CartTotal from '../../components/cart-total/cart-total.jsx';

import '../../components/checkout-header/checkout-header.scss'

const CheckoutHeader = ({ cartItems }) => {
  const blocks = ['Product', 'Description', 'Quantity', 'Price', 'Remove'];
  const blockList = blocks.map((block, key) => (
    <div key={ key } className="checkout-header__block">
      <span>{ block }</span>
    </div>
  ));

  return (
    <header className="checkout-header">
      { blockList }
      <div className="checkout-header__block">
        <CartTotal />
      </div>
    </header>
  );
}

export default CheckoutHeader;
