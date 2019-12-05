import React from "react";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

import "./App.css";

function App() {
  return (
    <div data-test="component-app" className="App">
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[
          { guessedWord: "train", letterMatchCount: 3 },
          { guessedWord: "agile", letterMatchCount: 1 },
          { guessedWord: "party", letterMatchCount: 5 }
        ]}
      />
    </div>
  );
}

export default App;
