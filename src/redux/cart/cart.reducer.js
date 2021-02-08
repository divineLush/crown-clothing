import CartActionTypes from './cart.types.js';
import { addItemToCart, removeItemFromCart } from './cart.utils.js';

const INITIAL_STATE = {
  isHidden: true,
  cartItems: [],
}

const cart = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      }
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, payload),
      }
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, payload),
      }
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems
          .filter(item => item.id !== payload.id),
      }
    default:
      return state;
  }
}

export default cart;
