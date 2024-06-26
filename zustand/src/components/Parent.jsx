import React from "react";
import { useFamilyStore } from "../store/useFamilyStore";

export default function Parent({ children }) {
  const address = useFamilyStore((state) => state.address);
  
  return (
    <div className="box">
      <h1>Parent</h1>
      <p>Address: {address}</p>
      {children}
    </div>
  );
}
