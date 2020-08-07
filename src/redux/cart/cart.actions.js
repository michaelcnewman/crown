import { CartActionTypes } from './cart.types';

export const toggleCartDropdown = () => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROPDOWN,
  };
};

export const addItemToCart = (cartItem) => {
  return {
    type: CartActionTypes.ADD_ITEM_TO_CART,
    payload: cartItem,
  };
};
