function Difficulty({ difficulty, changeDifficulty }) {
  return (
    <div className="difficulty">
      <div className="difficulty-container">
        <div className="difficulty-content">Difficulty:</div>
        <div
          className={
            difficulty === 1
              ? "difficulty-select difficulty-select--bg"
              : "difficulty-select"
          }
          onClick={() => changeDifficulty(1)}
        >
          Beginner
        </div>
        <div  className={
            difficulty === 2
              ? "difficulty-select difficulty-select--bg"
              : "difficulty-select"
          } onClick={() => changeDifficulty(2)}>
          Intermediate
        </div>
        <div  className={
            difficulty === 3
              ? "difficulty-select difficulty-select--bg"
              : "difficulty-select"
          } onClick={() => changeDifficulty(3)}>
          Advanced
        </div>
      </div>
    </div>
  );
}

export default Difficulty;
