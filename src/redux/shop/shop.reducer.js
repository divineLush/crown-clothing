import SHOP_DATA from './shop.initial.js';

import ShopActionTypes from './shop.types.js';

const INITIAL_STATE = {
  collections: SHOP_DATA
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
