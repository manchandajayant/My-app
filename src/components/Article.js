import React, {Component} from "react";
import PropTypes from "prop-types";

export default class Article extends Component {
  static propTypes = {
    author: PropTypes.string.isRequired,
    download_url: PropTypes.string.isRequired
  };

  render() {
    return (
      <p>
        <img
          style={{width: "150px", height: "150px"}}
          src={this.props.download_url}
          alt="still loading"
        />{" "}
        {this.props.author}{" "}
      </p>
    );
  }
}
