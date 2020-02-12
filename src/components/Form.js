import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Form extends Component {
  static propTypes = {
    addSentence: PropTypes.func.isRequired
  };

  state = {
    sentence: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addSentence(this.state.sentence);
    console.log(`submitting form with ${this.state.sentence}`);
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
