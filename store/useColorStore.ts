import { create } from "zustand";

interface ColorStore {
  color: string;
  setColor: (color: string) => void;
}

export const useColorStore = create<ColorStore>((set) => ({
  color: "black",
  setColor: (color) => set({ color }),
}));
