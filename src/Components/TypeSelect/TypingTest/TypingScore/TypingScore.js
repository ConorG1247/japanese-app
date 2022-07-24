import React from 'react'

function TypingScore({rounds}) {
  return (
    <div className='typing-score'>
        <div>Score: {rounds.score}</div>
        <div>{rounds.currentRound} / {rounds.rounds}</div>
    </div>
  )
}

export default TypingScore