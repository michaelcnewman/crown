export const addItemCheckQty = (cartItems, newItem) => {
  const existing = cartItems.find((item) => item.id === newItem.id);
  if (existing) {
    const newCartItems = cartItems.map((item) => {
      if (item.id === newItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });

    return newCartItems;
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

export const removeItemCheckQty = (cartItems, removeItem) => {
  const existing = cartItems.find((item) => item.id === removeItem.id);
  if (existing.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeItem.id);
  } else {
    const newCartItems = cartItems.map((item) => {
      if (item.id === removeItem.id) {
        return { ...item, quantity: item.quantity - 1 };
      } else {
        return item;
      }
    });
    return newCartItems;
  }
};
