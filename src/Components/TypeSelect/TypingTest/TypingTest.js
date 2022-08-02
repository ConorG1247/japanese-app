import { useState, useEffect } from "react";
import TypingButtons from "./TypingButtons/TypingButtons";
import TypingGame from "./TypingGame/TypingGame";
import TypingRounds from "./TypingRounds/TypingRounds";
import TypingScore from "./TypingScore/TypingScore";

function TypingTest({ langOptions, langAnswer }) {
  const [gameData, setGameData] = useState();
  const [language, setLanguage] = useState();
  const [rounds, setRounds] = useState({
    score: 0,
    currentRound: 0,
    rounds: 5,
  });

  useEffect(() => {
    setLanguage({ options: langOptions, answer: langAnswer });
  }, [langOptions, langAnswer]);

  // function for delay used to display the result after a certain period of time
  function delay(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  // changes rounds based on user selection, 5, 10, 15, infinite
  const updateRounds = (e) => {
    setRounds({ ...rounds, rounds: e.target.id });
  };

  // creates a random answer from libs data and stores it in a state to be passed down as a prop
  const startGame = () => {
    setRounds({ ...rounds, currentRound: rounds.currentRound + 1 });
    const answer = Math.floor(Math.random() * language.options.length);
    setGameData({
      answer: language.options[answer],
      answerEng: language.answer[answer],
    });
  };

  // checks for user input if it matches given answer or not and calls the nextRound function
  const answerInput = (value) => {
    setGameData({ ...gameData, input: value });

    if (gameData.answer === value || gameData.answerEng === value) {
      nextRound(true);
      return;
    }
    nextRound(false);
  };

  // displays correct or incorrect message based on users input and starts the next round
  const nextRound = async (ans) => {
    if (ans) {
      setGameData({ ...gameData, result: "Correct! 👍" });
      await delay(1000);
      setRounds({
        ...rounds,
        score: rounds.score + 1,
        currentRound: rounds.currentRound + 1,
      });
      setGameData("");
      startRound(true);
      return;
    }
    setGameData({
      ...gameData,
      result: `The correct answer was ${gameData.answer} (${gameData.answerEng}) 😔`,
    });
    await delay(1000);
    setRounds({ ...rounds, currentRound: rounds.currentRound + 1 });
    setGameData("");
    startRound(false);
    return;
  };

  const startRound = () => {
    const answer = Math.floor(Math.random() * language.options.length);
    setGameData({
      answer: language.options[answer],
      answerEng: language.answer[answer],
    });
  };

  // resets all game data back to inital value
  const resetGame = () => {
    setGameData();
    setRounds({
      score: 0,
      currentRound: 0,
      rounds: rounds.rounds,
    });
    return;
  };

  return (
    <div className="typing">
      <div className="flash-title"> Typing Test </div>
      <TypingRounds updateRounds={updateRounds} />
      <TypingScore rounds={rounds} />
      <TypingButtons startGame={startGame} resetGame={resetGame} />
      <TypingGame gameData={gameData} answerInput={answerInput} />
      <div
        className={
          gameData?.result === undefined
            ? ""
            : gameData?.result === "Correct! 👍"
            ? "flash-answer-dropdown-correct"
            : "flash-answer-dropdown-incorrect"
        }
      >
        {gameData?.result}
      </div>
    </div>
  );
}

export default TypingTest;
