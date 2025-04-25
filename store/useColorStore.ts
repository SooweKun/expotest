import { create } from "zustand";

interface ColorStore {
  color: string;
  selectColor: string;
  setColor: (color: string) => void;
  setSelectColor: (selectColor: string) => void;
}

interface BackgroundStore {
  background: string;
  setBackground: (background: string) => void; //переделать в типы
}

export const useColorStore = create<ColorStore>((set) => ({
  color: "white",
  selectColor: "#808080",
  setColor: (color) => set({ color }),
  setSelectColor: (selectColor) => set({ selectColor }),
}));

export const useBackgroundStore = create<BackgroundStore>((set) => ({
  background: "white",
  setBackground: (background) => set({ background }),
}));

