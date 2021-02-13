import React from 'react';

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
    </header>
  );
}

export default CheckoutHeader;
