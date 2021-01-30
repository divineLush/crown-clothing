import React from 'react';

import './checkout.scss';

const CheckoutPage = () => (
  <section className="checkout-page">
    <header className="checkout-page__header">
      <div className="checkout-page__header-block">
        <span>Product</span>
      </div>
      <div className="checkout-page__header-block">
        <span>Description</span>
      </div>
      <div className="checkout-page__header-block">
        <span>Quantity</span>
      </div>
      <div className="checkout-page__header-block">
        <span>Price</span>
      </div>
      <div className="checkout-page__header-block">
        <span>Remove</span>
      </div>
      <div className="checkout-page__total">
        <span>Total: $</span>
      </div>
    </header>
  </section>
);

export default CheckoutPage;
