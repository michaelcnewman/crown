import { CartActionTypes } from './cart.types';

export const toggleCartDropdown = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROPDOWN,
  };
};

export const addItem = (cartItem) => {
  return {
    type: CartActionTypes.ADD_ITEM,
    payload: cartItem,
  };
};

export const removeItem = (cartItem) => {
  return {
    type: CartActionTypes.REMOVE_ITEM,
    payload: cartItem,
  };
};

export const removeItemFromCart = (cartItem) => {
  return {
    type: CartActionTypes.REMOVE_ITEM_FROM_CART,
    payload: cartItem,
  };
};

export const clearCart = () => {
  return {
    type: CartActionTypes.CLEAR_CART,
  };
};
