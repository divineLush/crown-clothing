import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import user from './user/user.reducer';
import cart from './cart/cart.reducer.js';

const persistConfig = {
  // at what point inside reducer object do we want to storing everything
  key: 'root',
  storage,
  // array of string names of reducers that we want to store
  whitelist: ['cart'],
};

const rootReducer = combineReducers({ user, cart });

export default persistReducer(persistConfig, rootReducer);
