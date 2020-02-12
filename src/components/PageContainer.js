import React, {Component} from "react";
import ArticleList from "./ArticleList";
import SentencesSection from "./SentencesSection";

export default class PageContainer extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <SentencesSection />
      </div>
    );
  }
}
