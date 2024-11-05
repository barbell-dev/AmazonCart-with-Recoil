import { atom } from "recoil";
export const cartItemsState = atom({
  key: "cartItemsState",
  default: [],
  //default should have array of objects where the objects are the same as the ones in wish items but each object here should also contain quantity.
});
