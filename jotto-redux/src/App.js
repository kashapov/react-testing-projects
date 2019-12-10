import React, { Component } from "react";
import { connect } from "react-redux";

import Input from "./Input";
import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import { getSecretWord } from "./actions";

import "./App.css";

class App extends Component {
  render() {
    const { success, guessedWords } = this.props;

    return (
      <div data-test="component-app" className="App container">
        <h1>Jotto</h1>
        <Congrats success={success} />
        <Input />
        <GuessedWords guessedWords={guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(mapStateToProps, { getSecretWord })(App);
