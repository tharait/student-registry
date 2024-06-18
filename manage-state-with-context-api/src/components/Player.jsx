import React from "react";
import ScoreCard from "./ScoreCard";
import PlayButton from "./PlayButton";

import { useContext } from "react";

import { GameContext } from "../context/GameContext";

export default function Player({ label }) {
  const { winner } = useContext(GameContext);

  return (
    <div className={winner === label ? 'player winner' : 'player'}>
      <h1>Player {label} </h1>
      <ScoreCard label={label} />
      <PlayButton label={label} />
    </div>
  );
}
