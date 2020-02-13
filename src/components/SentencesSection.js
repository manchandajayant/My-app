import React, {Component} from "react";
import Form from "./Form";
import PropTypes from "prop-types";

export default class SentencesSection extends Component {
  static propTypes = {
    addSentence: PropTypes.func.isRequired
  };

  state = {
    sentence: "",
    count: 0,
    story: [],
    finished: ""
  };

  handleSubmitSentence = sentence => {
    this.setState({
      sentence,
      count: 1
    });
  };

  handleStory = sentence => {
    this.state.story.push(sentence);
    if (this.state.count === 10) {
      this.handleFinishedStory(this.state.story);
    } else {
      this.setState({count: this.state.count + 1});
      console.log("hello", this.state.count);
    }
  };

  handleFinishedStory = story => {
    const storyComplete = story.join(" ");
    this.setState({finished: storyComplete});

    console.log("Finished story:", storyComplete);
  };

  render() {
    return (
      <div>
        <h2>Sentence section</h2>
        <Form
          addSentence={this.handleSubmitSentence}
          tenSentences={this.handleStory}
        />
        <p>{this.state.story[this.state.story.length - 1]}</p>
        <p>
          {this.state.finished
            ? `YOU finished this STORY: ${this.state.finished}`
            : null}
        </p>
      </div>
    );
  }
}
