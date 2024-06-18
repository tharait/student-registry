import { createContext, useState } from "react";


export const GameContext = createContext();

const defaultScores = { A: 0, B: 1, C: 2 };

export function GameProvider({ children }) {
  const [scores, setScores] = useState(defaultScores);
  const [winner, setWinner] = useState(null);

  const play = (label) => {
    const newScores = { ...scores, [label]: Math.random() };
    setScores(newScores);

    let won = Object.keys(newScores)[0];
    let val = Object.values(newScores)[0];
    Object.values(newScores).forEach((score, i) => {
        if (score > val) {
            won = Object.keys(newScores)[i];
            val = score;
        }
    })
    setWinner(won);
  };

  return (
    <GameContext.Provider value={{ scores, winner, play }}>
      {children}
    </GameContext.Provider>
  );
}