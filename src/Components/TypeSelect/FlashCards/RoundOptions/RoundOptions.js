function RoundOptions({ options, deckOptions, buttonDisable, optionChoice, langAnswer }) {

  if (options) {
    return (
      options && options?.map((arr) => {
        return (
          <div key={Math.random() * 10000}>
            <button
              disabled={buttonDisable}
              className="flash-options-content"
              onClick={() => optionChoice(arr)}
            >
              {langAnswer[arr]}
            </button>
          </div>
        );
      })
    )
  }
  return (
    deckOptions.map((arr) => {
      return (
        <div key={Math.random() * 10000}>
          <button
            disabled={buttonDisable}
            className="flash-options-content"
            onClick={() => optionChoice(arr)}
          >
            {langAnswer[arr]}
          </button>
        </div>
      );
    })
  )
}

export default RoundOptions