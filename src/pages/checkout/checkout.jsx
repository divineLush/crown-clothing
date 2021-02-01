import React from 'react';

import CheckoutHeader from '../../components/checkout-header/checkout-header.jsx';
import CheckoutItemsList from '../../components/checkout-items-list/checkout-items-list.jsx';

import './checkout.scss';

const CheckoutPage = () => (
  <section className="checkout-page">
    <CheckoutHeader />
    <CheckoutItemsList />
  </section>
);

export default CheckoutPage;
