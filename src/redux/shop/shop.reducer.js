import SHOP_DATA from './shop.initial.js';

const INITIAL_STATE = {
  collections: SHOP_DATA
};

const shop = (state = INITIAL_STATE, { type }) => {
  switch (type) {
    default:
      return state;
  }
};

export default shop;
