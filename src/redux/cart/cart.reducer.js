import CartActionTypes from './cart.types.js';

const INITIAL_STATE = {
  isHidden: true,
}

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        isHidden: !state.isHidden,
      }
    default:
      return state;
  }
}

export default cart;