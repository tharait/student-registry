import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export const useFamilyStore = create(
  persist(
    (set) => ({
      address: "123 Main Street",
      surname: "Smith",
      setAddress: (newAddress) => set({ address: newAddress }),
      setSurname: (newSurname) => set({ surname: newSurname }),
    }),
    {
      name: "family-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
