import { CartActionTypes } from './cart.types';

export const toggleCartDropdown = (hidden) => {
  return {
    type: CartActionTypes.TOGGLE_CART_DROPDOWN,
  };
};
