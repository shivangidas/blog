import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bio from "./components/Bio";
export default class Links extends Component {
  render() {
    return (
      <section>
        <Bio />
        <ul>
          <li key="1">
            <Link to="/post1">My relationship with React</Link>
          </li>
          <li key="2">
            <Link to="/post2">post 2</Link>
          </li>
        </ul>
      </section>
    );
  }
}
