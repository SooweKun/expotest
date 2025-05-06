import { create } from "zustand";

type MessageStore = {
  message: string[];
  setMessage: (message: string) => void;
};

export const useMessageStore = create<MessageStore>((set) => ({
  message: [],
  setMessage: (message) =>
    set((state) => ({
      message: [...state.message, message],
    })),
}));
