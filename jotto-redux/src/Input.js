import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord } from "./actions";

export class UnconnectedInput extends Component {
  inputBox = React.createRef();

  submitGuessedWord = e => {
    const { guessWord } = this.props;
    e.preventDefault();
    const guessedWord = this.inputBox.current.value;

    if (guessedWord && guessedWord.length > 0) {
      guessWord(guessedWord);
    }
  };

  render() {
    const contents = this.props.success ? null : (
      <form className="form-inline">
        <input
          ref={this.inputBox}
          data-test="input-box"
          className="mb-2 mx-sm-3"
          id="word-guess"
          type="text"
          placeholder="enter guess"
        />
        <button
          data-test="submit-button"
          type="submit"
          className="btn btn-primary mb-2"
          onClick={this.submitGuessedWord}
        >
          Submit
        </button>
      </form>
    );

    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateTpProps = ({ success }) => {
  return { success };
};

export default connect(mapStateTpProps, { guessWord })(UnconnectedInput);
