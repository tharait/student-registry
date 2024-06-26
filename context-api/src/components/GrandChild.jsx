import React, { useContext, useState } from "react";
import { FamilyContext } from "../contexts/FamilyContext";

export default function GrandChild({ name }) {
  const family = useContext(FamilyContext);

  return (
    <div className="box">
      <h1>
        Grand Child {family.surname} {name}
      </h1>
    </div>
  );
}
