import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import { selectItemsCount } from '../../redux/cart/cart.selector.js';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-button.scss';

const CartButton = ({ toggleCartHidden, itemsCount }) => (
  <button
    className="cart-button"
    title="Toggle cart dropdown"
    onClick={ toggleCartHidden }
  >
    <ShoppingIcon className="cart-button__icon" />
    <span className="cart-button__item-count">{ itemsCount }</span>
  </button>
);

const mapStateToProps = state => ({
  // redux selector
  itemsCount: selectItemsCount(state),
});

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartButton);
