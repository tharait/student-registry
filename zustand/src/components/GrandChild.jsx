import React, { useContext, useState } from "react";
import { useFamilyStore } from "../store/useFamilyStore";

export default function GrandChild({ name }) {
  const family = useFamilyStore((state) => state);
  const [address, setAddress] = useState(family.address);

  const handleSubmit = (e) => {
    e.preventDefault();
    family.setAddress(address);
  };

  return (
    <div className="box">
      <h1>
        Grand Child {family.surname} {name}
      </h1>
      <form>
        <div>
          <label htmlFor="address">Address: {family.address}</label>
        </div>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
}
