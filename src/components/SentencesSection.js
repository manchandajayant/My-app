import React, {Component} from "react";
import Form from "./Form";
import PropTypes from "prop-types";

export default class SentencesSection extends Component {
  state = {
    sentence: "",
    count: 0
  };

  handleSubmitSentence = sentence => {
    // this.setState()
  };

  render() {
    return (
      <div>
        <h2>Sentence section</h2>
        <Form />
      </div>
    );
  }
}
