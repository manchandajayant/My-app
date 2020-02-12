import React from "react";
import "./App.css";
import PageContainer from "./components/PageContainer";

function App() {
  return (
    <div>
      <header>
        <nav id="nav">
          <p>Make a Cliffhanger</p>
        </nav>
      </header>
      <div>
        <PageContainer id="image" alt="link broken" />
      </div>
    </div>
  );
}

export default App;
