
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  static propTypes = {
    addSentence: PropTypes.func.isRequired,
    tenSentences: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired
  };

  state = {
    sentence: "",
    count: 0
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addSentence(this.state.sentence);
    this.props.tenSentences(this.state.sentence);
    if (this.props.tenSentences.length === 10) {
      return <p>{this.props.tenSentences}</p>;
    } else {
      this.setState({count: this.state.count + 1});
    }
    console.log(`submitting form with ${this.props.tenSentences}`);
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="add-sentence">
        <form onSubmit={this.handleSubmit}>
          <label>
            your two sentences!
            <input
              type="text"
              name="sentence"
              onChange={this.handleChange}
              value={this.state.sentence}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
