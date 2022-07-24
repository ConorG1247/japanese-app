function TypeSelect({ typeSelect, changeType }) {
    return (
      <div className="difficulty">
        <div className="difficulty-container">
          <div
            className={
              typeSelect === 1
                ? "difficulty-select difficulty-select--bg"
                : "difficulty-select"
            }
            onClick={() => changeType(1)}
          >
            Flash Cards
          </div>
          <div  className={
              typeSelect === 2
                ? "difficulty-select difficulty-select--bg"
                : "difficulty-select"
            } onClick={() => changeType(2)}>
            Typing Test
          </div>
          <div  className={
              typeSelect === 3
                ? "difficulty-select difficulty-select--bg"
                : "difficulty-select"
            } onClick={() => changeType(3)}>
            Memory
          </div>
        </div>
      </div>
    );
  }
  
  export default TypeSelect;
  