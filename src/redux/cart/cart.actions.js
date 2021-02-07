import CartActionTypes from './cart.types.js';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = payload => ({
  type: CartActionTypes.ADD_ITEM,
  payload,
});

export const clearItemFromCart = payload => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload,
});
