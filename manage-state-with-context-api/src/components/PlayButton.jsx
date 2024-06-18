import React from "react";
import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function PlayButton({label}) {
  const { play } = useContext(GameContext);

  const handlePlay = () => {
    play(label);
  };

  return (
    <button type="button" onClick={handlePlay}>
      Play
    </button>
  );
}
