export const addItemToCart = (cartItems, itemToAdd) => {
  const isExistingCartItem = cartItems
    .find(item => item.id === itemToAdd.id);

  const updateCartItemQuantity = (item) => {
    const updatedItem = { ...item, quantity: item.quantity + 1 };
    const isItemValid = item.id === itemToAdd.id;

    return isItemValid ? updatedItem : item;
  }

  const updatedCartItems = cartItems.map(updateCartItemQuantity);
  const defaultCartItems = [...cartItems, { ...itemToAdd, quantity: 1 }];

  return isExistingCartItem ? updatedCartItems : defaultCartItems;
};
