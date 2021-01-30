import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCartTotal } from '../../redux/cart/cart.selector.js';

const CartTotal = ({ total }) => (
  <span className="cart-total">
    Total: ${ total }
  </span>
);

const mapStateToProps = createStructuredSelector({
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CartTotal);
