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
            <Link to="/post1">My relationship with React</Link>{" "}
            <small>March 31, 2019</small>
            <br />
            <small>It has been bittersweet.</small>
          </li>
          <hr />
          <li key="2">
            <Link to="/">Post 2 </Link>
            <br />
            <small>Coming soon...</small>
          </li>
        </ul>
      </section>
    );
  }
}
