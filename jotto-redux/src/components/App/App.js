import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../Input/Input";
import GuessedWords from "../GuessedWords/GuessedWords";
import Congrats from "../Congrats/Congrats";
import TotalGuesses from "../TotalGuesses/TotalGuesses";
import NewWordButton from "../NewWordButton/NewWordButton";
import SecretWordReveal from "../SecretWordReveal/SecretWordReveal";

import { getSecretWord, resetGame } from "../../actions";

import "./App.css";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords, resetGame, gaveUp, secretWord } = this.props;

    return (
      <div data-test="component-app" className="App container">
        <h1>Jotto</h1>
        <div>
          <small>The secret word is {secretWord}</small>
        </div>
        <Congrats success={success} />
        <SecretWordReveal display={gaveUp} secretWord={secretWord} />
        <NewWordButton display={success || gaveUp} resetAction={resetGame} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
        <TotalGuesses guessCount={guessedWords.length} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord, gaveUp } = state;
  return { success, guessedWords, secretWord, gaveUp };
};

export default connect(mapStateToProps, { getSecretWord, resetGame })(
  UnconnectedApp
);
