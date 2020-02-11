import React from "react";
import "./App.css";
import { render } from "@testing-library/react";

function App() {
  return (
    <div>
      <header>
        <nav id="nav">
          <p>Make a Cliffhanger</p>
        </nav>
      </header>
      <div>
        <img id="image" src="nature.png"></img>
      </div>
      <div>
        <input id="comment"></input>
      </div>
    </div>
  );
}

export default App;
