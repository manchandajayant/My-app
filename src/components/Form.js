import React, {Component} from "react";

export default class Form extends Component {
  state = {
    comment: false
  };

  sentence = () => {
    console.log("hello");
  };

  render() {
    return (
      <div>
        <input id="comment"></input>
        <button id="submit" onSubmit={this.sentence}>
          submit sentence
        </button>
      </div>
    );
  }
}
