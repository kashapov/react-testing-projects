import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "../Input/Input";
import GuessedWords from "../GuessedWords/GuessedWords";
import Congrats from "../Congrats/Congrats";
import TotalGuesses from "../TotalGuesses/TotalGuesses";

import { getSecretWord } from "../../actions";

import "./App.css";

export class UnconnectedApp extends Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    const { success, guessedWords } = this.props;

    return (
      <div data-test="component-app" className="App container">
        <h1>Jotto</h1>
        <div>
          <small>The secret word is {this.props.secretWord}</small>
        </div>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
        <TotalGuesses guessCount={guessedWords.length} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
