import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Links extends Component {
  render() {
    return (
      <ul>
        <li key="1">
          <Link to="/post1">post 1</Link>
        </li>
        <li key="2">
          <Link to="/post2">post 2</Link>
        </li>
      </ul>
    );
  }
}
