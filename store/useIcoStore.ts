import { create } from "zustand";

interface IconStoreType {
  ico: any;
  setIco: (ico: any) => void;
}

interface IconUserStoreType {
  userIco: any;
  setUserIco: (ico: any) => void;
}

export const UseIcoStore = create<IconStoreType>((set) => ({
  ico: null,
  setIco: (ico: any) => set({ ico }),
}));

export const UseIcoUserStore = create<IconUserStoreType>((set) => ({
  userIco: require("@/assets/images/ico/Ico10.webp"),
  setUserIco: (userIco: any) => set({ userIco }),
}));
