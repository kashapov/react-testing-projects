import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for count of total guesses.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component.
 */
const TotalGuesses = props => {
  return (
    <h5 data-test="component-total-guesses">
      Total Guesses: {props.guessCount}
    </h5>
  );
};

TotalGuesses.propTypes = {
  guessCount: PropTypes.number.isRequired
};

export default TotalGuesses;
