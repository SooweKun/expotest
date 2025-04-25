import { create } from "zustand";

interface IconStoreType {
  ico: any;
  setIco: (ico: any) => void;
}

export const UseIcoStore = create<IconStoreType>((set) => ({
  ico: null,
  setIco: (ico: any) => set({ ico }),
}));
