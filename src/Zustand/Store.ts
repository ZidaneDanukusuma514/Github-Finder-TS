import { create } from "zustand";
import { Storeprop } from "./Interface";

export const useStore = create<Storeprop>((set) => ({
  count: 0,
  currentUser: [{ id: 1 }],
}));
