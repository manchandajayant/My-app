import React, {Component} from "react";
import "./grid.css";
import Article from "./Article";

export default class ArticleList extends Component {
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
        <Article author={picture.author} download_url={picture.download_url} />
      ));
      return <div className="gallery">{ul}</div>;
    }
  }
}
