import React from "react";
import "./App.css";
import LikeButton from "./components/LikeButton";
import Form from "./components/Form";
import FetchPicture from "./components/fetchPicture";

function App() {
  return (
    <div>
      <header>
        <nav id="nav">
          <p>Make a Cliffhanger</p>
        </nav>
      </header>
      <div>
        <FetchPicture id="image" alt="link broken" />
      </div>
      <main>
        <LikeButton />
        <Form />
      </main>
      <div></div>
    </div>
  );
}

export default App;
