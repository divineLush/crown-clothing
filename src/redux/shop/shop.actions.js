import ShopActionTypes from './shop.types.js';

export const updateCollections = collections => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collections,
});
