import React, { Component } from "react";
import { Link } from "react-router-dom";
class PostFooter extends Component {
  render() {
    return (
      <section className="postFooter">
        <hr />
        <Link to="/blog">Back to blog posts </Link><br></br>
        <span>
          Found a correction? {" "}
          <a
            href="https://github.com/shivangidas/blog/tree/master/src/posts"
            target="_blank"
            className="github"
            title="Github"
            rel="noopener noreferrer"
          >
            Raise a pull request here {" "}
            <i className="icon-github" aria-hidden="true" />
          </a>
        </span>
      </section>
    );
  }
}
export default PostFooter;
