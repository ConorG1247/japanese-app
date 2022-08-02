function Difficulty({ difficulty, changeDifficulty }) {
  return (
    <div className="difficulty">
      <div className="difficulty-container">
        <div className="difficulty-content">Difficulty:</div>
        <div
          className={
            difficulty === 1
              ? "difficulty-select difficulty-select--bg beginner"
              : "difficulty-select beginner"
          }
          onClick={() => changeDifficulty(1)}
        ></div>
        <div
          className={
            difficulty === 2
              ? "difficulty-select difficulty-select--bg intermediate"
              : "difficulty-select intermediate"
          }
          onClick={() => changeDifficulty(2)}
        ></div>
        <div
          className={
            difficulty === 3
              ? "difficulty-select difficulty-select--bg advanced"
              : "difficulty-select advanced"
          }
          onClick={() => changeDifficulty(3)}
        ></div>
      </div>
    </div>
  );
}

export default Difficulty;
