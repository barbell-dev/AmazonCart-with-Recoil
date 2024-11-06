import { selector } from "recoil";
export const cartTotalSelector = selector({
  key: "cartTotalSelector",
  get: { get },
});
