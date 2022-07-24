function FlashAnswer({options, answer, deckAnswer, langOptions}) {
  return (
    <div className="flash-answer">
    {options && (
      <div className="flash-answer-content">
        {langOptions[answer]}
      </div>
    )}
    {!options && (
      <div className="flash-answer-content">
        {langOptions[deckAnswer]}
      </div>
    )}
  </div>
  )
}

export default FlashAnswer