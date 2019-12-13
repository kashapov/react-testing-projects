import React, { Component } from "react";
import { connect } from "react-redux";

import { guessWord, giveUp } from "../../actions";

export class UnconnectedInput extends Component {
  inputBox = React.createRef();

  submitGuessedWord = evt => {
    const { guessWord } = this.props;

    evt.preventDefault();
    const guessedWord = this.inputBox.current.value;

    if (guessedWord && guessedWord.length > 0) {
      guessWord(guessedWord);
    }

    this.inputBox.current.value = "";
  };

  giveUpOnClick = evt => {
    const { giveUp } = this.props;

    evt.preventDefault();
    giveUp();
  };

  render() {
    const { success, gaveUp } = this.props;

    const contents =
      success || gaveUp ? null : (
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
          <button
            data-test="give-up-button"
            onClick={this.giveUpOnClick}
            className="btn btn-danger mb-2 ml-2"
          >
            Give up
          </button>
        </form>
      );

    return <div data-test="component-input">{contents}</div>;
  }
}

const mapStateTpProps = ({ success, gaveUp }) => {
  return { success, gaveUp };
};

export default connect(mapStateTpProps, { guessWord, giveUp })(
  UnconnectedInput
);
