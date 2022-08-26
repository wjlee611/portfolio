import { atom } from "recoil";

export const homeNavState = atom<number>({
  key: "homeNav",
  default: 1,
});

export const loadedAsset = atom<number>({
  key: "loadedAsset",
  default: 0,
});

export const backToMain = atom<boolean>({
  key: "backToMain",
  default: false,
});

export const inProject = atom<boolean>({
  key: "inProject",
  default: false,
});
