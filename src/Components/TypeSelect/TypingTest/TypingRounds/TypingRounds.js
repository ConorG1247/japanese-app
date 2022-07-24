import { useState } from "react";

function TypingRounds({updateRounds}) {
  const [rounds, setRounds] = useState(1);

  const changeRounds = (rounds) => {
    setRounds(rounds);
  };

  return (
    <div className="typing-rounds">
      <button
        className={
          rounds === 1 ? "round-select round-select--bg" : "round-select"
        }
        id={5}
        onClick={(e) => {
          changeRounds(1);
          updateRounds(e);
        }}
      >
        5
      </button>
      <button
        className={
          rounds === 2 ? "round-select round-select--bg" : "round-select"
        }
        id={10}
        onClick={(e) => {
          changeRounds(2);
          updateRounds(e);
        }}
      >
        10
      </button>
      <button
        className={
          rounds === 3 ? "round-select round-select--bg" : "round-select"
        }
        id={15}
        onClick={(e) => {
          changeRounds(3);
          updateRounds(e);
        }}
      >
        15
      </button>
      <button
        className={
          rounds === 4 ? "round-select round-select--bg" : "round-select"
        }
        id={"∞"}
        onClick={(e) => {
          changeRounds(4);
          updateRounds(e);
        }}
      >
        ∞
      </button>
    </div>
  );
}

export default TypingRounds;
