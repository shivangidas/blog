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
        <form
          style={{
            border: "1px solid #ccc",
            padding: "2%"
          }}
          action="https://tinyletter.com/shivangi"
          method="post"
          target="popupwindow"
          onSubmit="window.open('https://tinyletter.com/shivangi', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
        >
          <h3>Join the newsletter</h3>
          <p>
            <label htmlFor="tlemail">Enter your email address </label>
            <input type="text" name="email" id="tlemail" />
            <br />
            <small>I won't spam. Unsubscribe at any time.</small>
          </p>
          <input type="hidden" value="1" name="embed" />
          <input type="submit" value="Subscribe" />
          <p>
            <a
              href="https://tinyletter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              powered by TinyLetter
            </a>
          </p>
        </form>
      </section>
    );
  }
}
