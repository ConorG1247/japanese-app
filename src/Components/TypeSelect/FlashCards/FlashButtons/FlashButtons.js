import { useState, useEffect} from "react";

function FlashButtons({ options, answer, createOptions, saveCard, reset, deckSelected, resetDeck }) {
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    setDisable(false);
  },[answer])

  return (
    <div className="flash-buttons-container">
      {!options && (
        <button className="flash-buttons-start" onClick={() => createOptions()}>
          Start
        </button>
      )}
      {options && (
        <button
          disabled={disable}
          className="flash-buttons-start"
          onClick={() => {
            saveCard(answer);
            setDisable(true);
          }}
        >
          Save Card
        </button>
      )}
      <button className="flash-buttons-reset" onClick={() => reset()}>
        Reset
      </button>
      {deckSelected === "true" && <button className="flash-buttons-reset" onClick={() => resetDeck()}>
        Reset Deck
      </button>}
    </div>
  );
}

export default FlashButtons;
