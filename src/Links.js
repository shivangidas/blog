import React, { Component } from "react";
import { Link } from "react-router-dom";
import Bio from "./components/Bio";
export default class Links extends Component {
  render() {
    return (
      <section>
        <Bio />
        <ul>
          <li key="3">
            <Link to="/Overfitted">What's in a name?</Link>{" "}
            <small>April 15, 2019</small>
            <br />
            <small>
              Why is this blog called Overfitted? Why does it even exist?
            </small>
          </li>
          <hr />
          <li key="2">
            <Link to="/ServiceWorkers">Service Workers</Link>{" "}
            <small>April 4, 2019</small>
            <br />
            <small>Did you know this blog runs offline, too?</small>
          </li>
          <hr />
          <li key="1">
            <Link to="/ReactAndMe">My relationship with React</Link>{" "}
            <small>March 31, 2019</small>
            <br />
            <small>It has been bittersweet.</small>
          </li>
        </ul>
      </section>
    );
  }
}
