import CartActionTypes from './cart.types.js';
import { addItemToCart } from './cart.utils.js';

const INITIAL_STATE = {
  isHidden: true,
  cartItems: [],
}

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      }
    default:
      return state;
  }
}

export default cart;
