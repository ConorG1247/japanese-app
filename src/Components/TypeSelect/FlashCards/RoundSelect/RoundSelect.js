import { useState } from "react";

function RoundSelect({ roundSelection, deckCards, selectDisable }) {
  const [rounds, setRounds] = useState(1);

  const changeRounds = (rounds) => {
    setRounds(rounds);
  };

  return (
    <div className="round">
      <div className="round-container">
        {deckCards.length > 0 && (
          <button
          style={{width: 55}}
            disabled={selectDisable}
            id={"∞"}
            value="true"
            className={
              rounds === 0 ? "round-select round-select--bg" : "round-select"
            }
            onClick={(e) => {
              changeRounds(0);
              roundSelection(e);
            }}
          >
            Deck
          </button>
        )}
        <button
          disabled={selectDisable}
          className={
            rounds === 1 ? "round-select round-select--bg" : "round-select"
          }
          value="false"
          id={5}
          onClick={(e) => {
            changeRounds(1);
            roundSelection(e);
          }}
        >
          5
        </button>
        <button
          disabled={selectDisable}
          className={
            rounds === 2 ? "round-select round-select--bg" : "round-select"
          }
          value="false"
          id={10}
          onClick={(e) => {
            changeRounds(2);
            roundSelection(e);
          }}
        >
          10
        </button>
        <button
          disabled={selectDisable}
          className={
            rounds === 3 ? "round-select round-select--bg" : "round-select"
          }
          value="false"
          id={15}
          onClick={(e) => {
            changeRounds(3);
            roundSelection(e);
          }}
        >
          15
        </button>
        <button
          disabled={selectDisable}
          className={
            rounds === 4 ? "round-select round-select--bg" : "round-select"
          }
          value="false"
          id={"∞"}
          onClick={(e) => {
            changeRounds(4);
            roundSelection(e);
          }}
        >
          ∞
        </button>
      </div>
    </div>
  );
}

export default RoundSelect;
