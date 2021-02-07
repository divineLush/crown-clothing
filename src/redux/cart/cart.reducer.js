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
    case CartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems
          .filter(item => item.id !== action.payload),
      }
    default:
      return state;
  }
}

export default cart;
