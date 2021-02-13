import React from 'react';

import CheckoutHeader from '../../components/checkout-header/checkout-header.jsx';
import CheckoutItemsList from '../../components/checkout-items-list/checkout-items-list.jsx';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.jsx';
import CartTotal from '../../components/cart-total/cart-total.jsx';

import './checkout.scss';

const CheckoutPage = () => (
  <section className="checkout-page">
    <CheckoutHeader />
    <CheckoutItemsList />
    <div className="checkout-page__payments">
      <CartTotal />
      <StripeCheckoutButton />
    </div>
  </section>
);

export default CheckoutPage;
