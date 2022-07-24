import { useState } from "react";
import Difficulty from "../../Difficulty/Difficulty";
import TypeSelect from "../../TypeSelect/TypeSelect";
import Navbar from "../../Navbar/Navbar";
import FlashCards from "../../TypeSelect/FlashCards/FlashCards";
import TypingTest from "../../TypeSelect/TypingTest/TypingTest";
import { beginnerKatakanaOptions, beginnerKatakanaAnswer  } from "../../../libs/data";

function Katakana() {
  const [difficulty, setDifficulty] = useState(1);
  const [typeSelect, setTypeSelect] = useState(1);
  
  const changeDifficulty = (diff) => {
    setDifficulty(diff)
  }

  const changeType = (type) => {
    setTypeSelect(type)
  }

  return (
    <div className="hiragana">
      <Navbar />
      <div className="hiragana-container">
        <Difficulty difficulty={difficulty} changeDifficulty={changeDifficulty}/>
        <TypeSelect typeSelect={typeSelect} changeType={changeType}/>
          {typeSelect === 1 && <FlashCards langOptions={beginnerKatakanaOptions} langAnswer={beginnerKatakanaAnswer}/>}
          {typeSelect === 2 && <TypingTest langOptions={beginnerKatakanaOptions} langAnswer={beginnerKatakanaAnswer}/>}
      </div>
    </div>
  );
}

export default Katakana;
