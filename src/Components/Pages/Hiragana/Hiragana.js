import { useState } from "react";
import Difficulty from "../../Difficulty/Difficulty";
import TypeSelect from "../../TypeSelect/TypeSelect";
import Navbar from "../../Navbar/Navbar";
import FlashCards from "../../TypeSelect/FlashCards/FlashCards";
import TypingTest from "../../TypeSelect/TypingTest/TypingTest";
import { beginnerHiraganaAnswer, beginnerHiraganaOptions } from "../../../libs/data";

function Hiragana() {
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
          {typeSelect === 1 && <FlashCards langOptions={beginnerHiraganaOptions} langAnswer={beginnerHiraganaAnswer}/>}
          {typeSelect === 2 && <TypingTest langOptions={beginnerHiraganaOptions} langAnswer={beginnerHiraganaAnswer}/>}
      </div>
    </div>
  );
}

export default Hiragana;
