import React from 'react'
import { useContext } from 'react'
import { GameContext } from '../context/GameContext'

export default function ScoreCard({label}) {
  const { scores, winner } = useContext(GameContext);

  return (
    <div>Score: {scores[label]} Winner: {winner}</div>
  )
}
