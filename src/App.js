import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Post1 from "./posts/post1.js";
import Post2 from "./posts/post2.js";

import Links from "./Links.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1>
              <Link to="/blog">Shivangi's blog!</Link>
            </h1>

            <Route exact path="/blog" component={Links} />
            <Route path="/post1" component={Post1} />
            <Route path="/post2" component={Post2} />
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
