import { createSelector } from 'reselect';

// input selector
// gets full state and returns a slice of it
// one layer deep usually
const selectCart = state => state.cart;

// output selectors use createSelector to build themselves
// the first argument of createSelector is an array of input selectors
// the second is a function that returns the value
// that we want to select
export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems,
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.isHidden,
);

// cleaner approach
// gives memoized selectors that cash values
// better for performance as there is no need to rerender components
// when the state values are equal
export const selectItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems
    .reduce((acc, cartItem) => acc + cartItem.quantity, 0),
);
