import { combineReducers } from 'redux';

import user from './user/user.reducer';
import cart from './cart/cart.reducer.js';

export default combineReducers({ user, cart });
