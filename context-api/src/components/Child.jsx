import React, { useContext } from "react";
import { FamilyContext } from "../contexts/FamilyContext";

export default function Child({ children, name }) {
  const family = useContext(FamilyContext);

  return (
    <div className="box">
      <h1>
        Child {family.surname} {name}
      </h1>
      {children}
    </div>
  );
}
