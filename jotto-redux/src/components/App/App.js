import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Input from "../Input/Input";
import GuessedWords from "../GuessedWords/GuessedWords";
import Congrats from "../Congrats/Congrats";
import TotalGuesses from "../TotalGuesses/TotalGuesses";
import NewWordButton from "../NewWordButton/NewWordButton";
import SecretWordReveal from "../SecretWordReveal/SecretWordReveal";
import EnterWordButton from "../EnterWordButton/EnterWordButton";
import EnterWordForm from "../EnterWordForm/EnterWordForm";

import {
  getSecretWord,
  resetGame,
  setUserSecretWord,
  setUserEntering
} from "../../actions";

import "./App.css";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const {
      success,
      guessedWords,
      resetGame,
      gaveUp,
      secretWord,
      userEnter,
      setUserSecretWord,
      setUserEntering
    } = this.props;

    let contents;

    if (userEnter === "inProgress") {
      contents = <EnterWordForm formAction={setUserSecretWord} />;
    } else {
      contents = (
        <Fragment>
          <Congrats success={success} />
          <SecretWordReveal display={gaveUp} secretWord={secretWord} />
          <NewWordButton display={success || gaveUp} resetAction={resetGame} />
          <Input />
          <GuessedWords guessedWords={guessedWords} />
          <TotalGuesses guessCount={guessedWords.length} />
          <EnterWordButton
            display={guessedWords.length === 0}
            buttonAction={setUserEntering}
          />
        </Fragment>
      );
    }

    return (
      <div data-test="component-app" className="App container">
        <h1>Jotto</h1>
        <div>
          <small>The secret word is {secretWord}</small>
        </div>
        {contents}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord, gaveUp, userEnter } = state;
  return { success, guessedWords, secretWord, gaveUp, userEnter };
};

export default connect(mapStateToProps, {
  getSecretWord,
  resetGame,
  setUserSecretWord,
  setUserEntering
})(UnconnectedApp);
