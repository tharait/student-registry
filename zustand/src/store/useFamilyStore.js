import { create } from "zustand";

export const useFamilyStore = create((set) => ({
  address: "123 Main Street",
  surname: "Smith",
  setAddress: (newAddress) => set({ address: newAddress }),
  setSurname: (newSurname) => set({ surname: newSurname }),
}));
