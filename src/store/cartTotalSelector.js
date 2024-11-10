import { selector } from "recoil";
import { cartItemsState } from "./cartItemsState";
export const cartTotalSelector = selector({
  key: "cartTotal",
  get: ({ get }) => {
    const cartItems = get(cartItemsState);
    let sum = 0;
    cartItems.forEach((element, index) => {
      sum += element.price * element.quantity;
      // console.log(element);
    });
    let arr = [cartItems.length, sum];
    return arr;
  },
});
