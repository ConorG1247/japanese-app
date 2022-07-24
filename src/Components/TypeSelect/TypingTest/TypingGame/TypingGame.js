import { useState } from "react";

function TypingGame({ gameData, answerInput, inputDisable }) {
  const [userInput, setUserInput] = useState("");

  const input = (e) => {
    if (e.key === "Enter") {
        answerInput(e.target.value)
        setUserInput("")
        return
    }
    setUserInput(e.target.value)
  }

  return (
    <div className="typing-game">
      {gameData?.answer && (
        <div className="typing-game-answer">{gameData?.answer}</div>
      )}
      {gameData?.answer && (
        <input
          type={"text"}
          className="typing-game-input"
          value={userInput}
          onChange={(e) => input(e)}
          onKeyDown={(e) => input(e)}
        ></input>
      )}
    </div>
  );
}

export default TypingGame;
