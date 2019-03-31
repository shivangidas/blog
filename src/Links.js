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
            <br />
            <small>March 31, 2019</small>
            <br />
            <span>It has been bittersweet.</span>
          </li>
          <li key="2">
            <Link to="/">Post 2 </Link>
            <br />
            <span>Coming soon...</span>
          </li>
        </ul>
      </section>
    );
  }
}
