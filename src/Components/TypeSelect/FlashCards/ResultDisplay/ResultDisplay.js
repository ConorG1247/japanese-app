import { useEffect, useState } from "react";

function ResultDisplay({ count, resultReset }) {
    const [finalResults, setFinalResults] = useState();
    
    useEffect(() => {
        const displayResults = () => {
          let correctCount = count.correctCount;
          if (count.roundCount === 10) {
            correctCount = count.correctCount / 2;
          } else if (count.roundCount === 15) {
            correctCount = count.correctCount / 3;
          }
      
          if (correctCount === 0) {
            setFinalResults({
              result: "Looks like you didn't get any correct 😔 but that's okay!",
              score: "F",
            });
          } else if (correctCount <= 2) {
            setFinalResults({
              result: "Nice try, keep working at it! 👍",
              score: "D",
            });
          } else if (correctCount > 2 && correctCount <= 3) {
            setFinalResults({
              result: "Good job, you're getting better! 😅",
              score: "C",
            });
          } else if (correctCount > 3 && correctCount <= 4) {
            setFinalResults({
              result: "Great work, almost max score 🥳",
              score: "B",
            });
          } else if (correctCount > 4 && correctCount < 5) {
            setFinalResults({
              result: "Almost a perfect score, but you still did amazing! 😊",
              score: "A",
            });
          } else if (correctCount === 5) {
            setFinalResults({ result: " ✨ Perfect! ✨", score: "A+" });
          }
          resultReset();
        };
        if (count.result) {
          displayResults();
          return
      }
      if (count.reset) {
          setFinalResults();
          return
      }
    }, [count.correctCount, resultReset, count.reset, count.result, count.roundCount])

  // creates results and rating based on users final score
 

  return (
    finalResults && (
        <div className="flash-results-dropdown">
          <div>{finalResults.result}</div>
          <div>Overall score: {finalResults.score}</div>
        </div>
      )
  )
}

export default ResultDisplay;
