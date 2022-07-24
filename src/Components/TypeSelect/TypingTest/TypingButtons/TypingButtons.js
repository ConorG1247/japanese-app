function TypingButtons({ startGame, resetGame }) {
  return (
    <div className="flash-buttons-container">
      <button className="flash-buttons-start" onClick={() => startGame()}>
        Start
      </button>
      <button className="flash-buttons-reset" onClick={() => resetGame()}>Reset</button>
    </div>
  );
}

export default TypingButtons;
