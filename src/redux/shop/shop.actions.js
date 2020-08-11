import { ShopActionTypes } from './shop.types';

export const updateCollections = (collectionsObj) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsObj,
});
