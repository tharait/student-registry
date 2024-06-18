import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Player from "./components/Player";
import { GameProvider } from "./context/GameContext";

function App() {
  const [players, setPlayers] = useState(["A", "B", "C"]);

  return (
    <>
      <GameProvider>
        {players.map((player) => (
          <Player key={player} label={player} />
        ))}
      </GameProvider>
    </>
  );
}

export default App;
