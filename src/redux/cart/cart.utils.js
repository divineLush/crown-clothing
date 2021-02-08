const existingCartItem = (cartItems, itemToCheck) => cartItems
  .find(item => item.id === itemToCheck.id);

export const addItemToCart = (cartItems, itemToAdd) => {
  const updateCartItemQuantity = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    const isItemValid = item.id === itemToAdd.id;

    return isItemValid ? updatedItem : item;
  }

  const updatedCartItems = cartItems.map(updateCartItemQuantity);
  const defaultCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];

  return existingCartItem(cartItems, itemToAdd)
    ? updatedCartItems : defaultCartItems;
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  const removeItem = items => items
    .filter(item => item.id !== itemToRemove.id);

  const decreaseQuantity = items => items
    .map(item => item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1  }
        : item);

  const isOnlyItem = existingCartItem(cartItems, itemToRemove).quantity === 1;

  return isOnlyItem ? removeItem(cartItems) : decreaseQuantity(cartItems);
}
