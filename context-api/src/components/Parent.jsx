import React from "react";
import { useContext } from "react";
import { FamilyContext } from "../contexts/FamilyContext";

export default function Parent({ children }) {
  const family = useContext(FamilyContext);
  return (
    <div className="box">
      <h1>Parent</h1>
      <p>Address: {family.address}</p>
      {children}
    </div>
  );
}
