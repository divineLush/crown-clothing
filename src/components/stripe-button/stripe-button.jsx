import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartTotal } from '../../redux/cart/cart.selector.js';

import stripePublicKey from './public-key.js';

const StripeCheckoutButton = ({ total }) => {
  const priceForStripe = total * 100;
  const description = `Your total is $${total}`;
  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return (
    <StripeCheckout
      label="Pay Now"
      panelLabel="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={ description }
      amount={ priceForStripe }
      token={ onToken }
      stripeKey={ stripePublicKey }
    />
  );
}

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});

export default connect(mapStateToProps)(StripeCheckoutButton);
