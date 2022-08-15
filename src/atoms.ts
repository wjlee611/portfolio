import { atom } from "recoil";

export const homeNavState = atom<number>({
  key: "homeNav",
  default: 1,
});
