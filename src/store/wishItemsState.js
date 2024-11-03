import { atom } from "recoil";
export const wishItemsState = atom({
  key: "wishItemsState",
  default: ["photo-frame", "coffee-cup", "pillows"],
});
