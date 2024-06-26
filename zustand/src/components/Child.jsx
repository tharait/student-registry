import React from "react";
import { useFamilyStore } from "../store/useFamilyStore";

export default function Child({ children, name }) {
  const family = useFamilyStore((state) => state);

  return (
    <div className="box">
      <h1>
        Child {family.surname} {name}
      </h1>
      {children}
    </div>
  );
}
