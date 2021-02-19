import ShopActionTypes from './shop.types.js';

const INITIAL_STATE = {
  collections: null,
};

const shop = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload,
      }
    default:
      return state;
  }
};

export default shop;
