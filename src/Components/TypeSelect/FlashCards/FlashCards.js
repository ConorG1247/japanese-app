import { useState, useEffect } from "react";
import RoundSelect from "./RoundSelect/RoundSelect";
import AnswerDisplay from "./AnswerDisplay/AnswerDisplay";
import RoundOptions from "./RoundOptions/RoundOptions";
import ResultDisplay from "./ResultDisplay/ResultDisplay";
import FlashButtons from "./FlashButtons/FlashButtons";
import FlashAnswer from "./FlashAnswer/FlashAnswer";

function FlashCards({langOptions, langAnswer}) {
  const [answer, setAnswer] = useState();
  const [options, setOptions] = useState();
  const [deckCards, setDeckCards] = useState([]);
  const [deckAnswer, setDeckAnswer] = useState();
  const [deckOptions, setDeckOptions] = useState([]);
  const [buttonDisable, setButtonDisable] = useState(false);
  const [selectDisable, setSelectDisable] = useState(false);
  const [deckSelected, setDeckSelected] = useState("false");
  const [classname, setClassname] = useState("");
  const [result, setResult] = useState();
  const [count, setCount] = useState({
    correctCount: 0,
    roundCount: 0,
    rounds: 5,
    result: false,
    reset: false,
  });


  useEffect(() => {
    const fillChoices = () => {
      const random = Math.floor(Math.random() * langOptions.length);
      const ans = Math.floor(Math.random() * deckCards.length);
      const index = Math.floor(Math.random() * 4);

      if (deckOptions.length < 4) {
        if (!deckOptions.includes(random)) {
          setDeckOptions([...deckOptions, random]);
          return;
        }
      } 
      if (deckOptions.includes(deckCards[ans])) {
        setDeckAnswer(deckCards[ans]); 
        return
      }
      if (!deckOptions.includes(deckCards[ans])) {
        if (deckOptions.length === 4) {
          setDeckAnswer(deckCards[ans]);
          deckOptions.splice(index, 1, deckCards[ans]);
          return;
        }
        fillChoices();
        return;
      }
    };
    fillChoices();
  }, [deckOptions, deckCards, langOptions]);

    // generates new answer and options when options dependancy changes
    useEffect(() => {
      const optionsGenerate = () => {
        const random = Math.floor(Math.random() * langOptions.length);
        if (options?.length < 4) {
          if (options?.includes(random)) {
            optionsGenerate();
            return;
          }
          setOptions([...options, random]);
          return;
        }
        const startFlash = () => {
          const random = Math.floor(Math.random() * langOptions.length);
          const index = Math.floor(Math.random() * 4);
  
          if (!options?.includes(random)) {
            setAnswer(random);
            options?.splice(index, 1, random);
            return;
          }
          startFlash();
          return;
        };
        startFlash();
      };
      optionsGenerate();
    }, [options, langOptions]);

  // changes total rounds based on users selection
  const roundSelection = (e) => {
    setDeckSelected(e.target.value);
    setCount({ ...count, rounds: e.target.id });
  };

  // checks if current round = total rounds and displays results if so which ends the game
  // if rounds are different, resets states back to default and generates new by triggering the useEffect
  const nextRound = () => {
    if (deckSelected === "true") {
      setCount({ ...count, roundCount: count.roundCount + 1 });
      setDeckOptions([]);
      setDeckAnswer();
      setButtonDisable(false);
      setResult("");
      setClassname("");
      return;
    }

    if (count.roundCount === count.rounds) {
      setClassname("");
      setCount({ ...count, result: true });
      return;
    }
    setCount({ ...count, roundCount: count.roundCount + 1 });
    setOptions([]);
    setAnswer();
    setClassname("");
    setButtonDisable(false);
    setResult("");
    createOptions();
  };

  // allows user to save a flash card to their deck to practice specific ones they struggle with
  const saveCard = (ans) => {
    if (!deckCards.includes(ans)) {
      setDeckCards([...deckCards, ans]);
      return
    }
  };

  const resultReset = () => {
    setAnswer();
    setOptions();
    setButtonDisable(false);
    setResult("");
    setCount({
      correctCount: 0,
      roundCount: 0,
      rounds: count.rounds,
      result: false,
      reset: false,
    });
  };

  // resets to to inital state and change options dependency to trigger the useEffect
  const createOptions = () => {
    if (deckSelected === "true") {
      setCount({ ...count, roundCount: count.roundCount + 1 });
      setCount({ ...count, roundCount: count.roundCount + 1 });
      return;
    }
    setClassname("");
    setCount({ ...count, roundCount: count.roundCount + 1 });
    setSelectDisable(true);
    setOptions([]);
  };

  // checks if user choice is the correct answer
  const optionChoice = (id) => {
    setButtonDisable(true);

    if (deckSelected === "true") {
      if (id !== deckAnswer) {
        setClassname("flash-answer-dropdown-incorrect");
        setResult(
          `The correct answer was ${langAnswer[deckAnswer]} 😔`
        );
        return;
      }
      setClassname("flash-answer-dropdown-correct");
      setResult("Correct! 👍");
      setCount({ ...count, correctCount: count.correctCount + 1 });
      return;
    }

    if (id !== answer) {
      setClassname("flash-answer-dropdown-incorrect");
      setResult(`The correct answer was ${langAnswer[answer]} 😔`);
      return;
    }
    setClassname("flash-answer-dropdown-correct");
    setResult("Correct! 👍");
    setCount({ ...count, correctCount: count.correctCount + 1 });
  };

  // resets all states back to default so game starts new
  const reset = () => {
    setAnswer();
    setOptions();
    setDeckOptions([]);
    setClassname("");
    setResult("");
    setButtonDisable(false);
    setSelectDisable(false);
    setCount({
      correctCount: 0,
      roundCount: 0,
      rounds: count.rounds,
      result: false,
      reset: true,
    });
  };

  const resetDeck = () => {
      setDeckCards([])
      setDeckSelected("false")
  }

  return (
    <div className="flash-container">
      <div className="flash-title">Flash Cards</div>
      <RoundSelect
        roundSelection={roundSelection}
        deckCards={deckCards}
        selectDisable={selectDisable}
      />
      <div className="typing-score">
        <div>Score: {count.correctCount}</div>
        <div>
          {count.roundCount} / {count.rounds}
        </div>
      </div>
      <FlashButtons
        options={options}
        answer={answer}
        createOptions={createOptions}
        saveCard={saveCard}
        reset={reset}
        resetDeck={resetDeck}
        deckSelected={deckSelected}
      />
      <ResultDisplay count={count} resultReset={resultReset} />
      {count.roundCount > 0 && (
        <FlashAnswer
          options={options}
          answer={answer}
          deckAnswer={deckAnswer}
          langOptions={langOptions}
        />
      )}
      {count.roundCount > 0 && (
        <div className="flash-options">
          <RoundOptions
            options={options}
            deckOptions={deckOptions}
            buttonDisable={buttonDisable}
            optionChoice={optionChoice}
            langAnswer={langAnswer}
          />
        </div>
      )}
      {deckOptions && (
        <AnswerDisplay
          classname={classname}
          result={result}
          nextRound={nextRound}
        />
      )}
    </div>
  );
}

export default FlashCards;
