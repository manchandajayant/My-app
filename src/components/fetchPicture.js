import React, { Component } from "react";
import "./grid.css";

export default class fetchPicture extends Component {
  state = {
    loading: true,
    pictures: [],
    error: true
  };

  componentDidMount() {
    fetch("https://picsum.photos/v2/list")
      .then(response => response.json())
      .then(data => {
        console.log("this is photo", data);
        this.setState({
          loading: false,
          data,
          error: false
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <div> "image loading" </div>;
    } else if (this.state.error) {
      return <div> error! Sorry! </div>;
    } else {
      const ul = this.state.data.map((picture, index) => (
        <p>
          <img
            style={{ width: "450px", height: "450px" }}
            key={index}
            src={picture.download_url}
            alt="still loading"
          />{" "}
          {picture.author}{" "}
        </p>
      ));
      return <p>{ul}</p>;
    }
  }
}
