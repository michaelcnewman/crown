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
