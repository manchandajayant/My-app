import React, { Component } from "react";
import Form from "./Form";

export default class SentencesSection extends Component {
  static propTypes = {
    addSentence: PropTypes.func.isRequired
  };

  state = {
    sentence: "",
    count: 0
  };

  handleSubmitSentence = sentence => {
    this.setState({
      sentence,
      count: 1
    });
  };

  render() {
    return (
      <div>
        <h2>Sentence section</h2>
        <Form addSentence={this.handleSubmitSentence} />
        <p>{this.state.sentence}</p>
      </div>
    );
  }
}
