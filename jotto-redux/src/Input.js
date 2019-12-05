import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    return (
      <div>
        <button></button>
      </div>
    );
  }
}

const mapStateTpProps = state => {
  return {};
};

export default connect(mapStateTpProps)(Input);
