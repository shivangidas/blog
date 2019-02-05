import React, { Component } from "react";
import { Link } from "react-router-dom";
class Layout extends Component {
  render() {
    return (
      <header className="App-header">
        <h1>
          <Link to="/blog">Shivangi's blog!</Link>
        </h1>
      </header>
    );
  }
}
export default Layout;
