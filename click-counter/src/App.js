import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    error: false
  };

  incrementCounter = () => {
    if (this.state.error) {
      this.setState({ error: false });
    }
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    if (this.state.counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          The counter is currently: {this.state.counter}
        </h1>

        <button
          data-test="decrement-button"
          onClick={() => this.setState(this.decrementCounter)}
        >
          Decrement
        </button>
        <button data-test="increment-button" onClick={this.incrementCounter}>
          Increment
        </button>

        {this.state.error && (
          <div data-test="error-message">
            Error: The counter cannot go below 0
          </div>
        )}
      </div>
    );
  }
}

export default App;
