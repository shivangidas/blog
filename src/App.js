import React, { Component } from "react";
import "./App.css";
import Image from "./components/image";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>I am a Header</h1>
          <Image />
        </header>
      </div>
    );
  }
}

export default App;
