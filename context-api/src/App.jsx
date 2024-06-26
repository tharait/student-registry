import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Parent from "./components/Parent";
import Child from "./components/Child";
import GrandChild from "./components/GrandChild";
import { FamilyContext } from "./contexts/FamilyContext";

function App() {

  return (
    <>
      <FamilyContext.Provider value={{ surname: "Rathnayake", address: "Colombo" }}>
        <Parent>
          <Child name="A">
            <GrandChild name="AA" />
            <GrandChild name="AB" />
          </Child>
        </Parent>
      </FamilyContext.Provider>

      <FamilyContext.Provider value={{ surname: "Rathnayake", address: "Kandy" }}>
        <Parent>
          <Child name="A">
            <GrandChild name="AA" />
            <GrandChild name="AB" />
          </Child>
        </Parent>
      </FamilyContext.Provider>
    </>
  );
}

export default App;
