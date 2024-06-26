import { createContext } from "react";
import React from "react";

export const FamilyContext = createContext({ surname: "", address: "" });

export default function FamilyContextProvider({ children, value }) {
  return (
    <FamilyContext.Provider value={value}>{children}</FamilyContext.Provider>
  );
}
