import React, { Component } from "react";
import { Link } from "react-router-dom";
class PostFooter extends Component {
  render() {
    return (
      <section className="postFooter">
        <hr />
        <Link to="/blog">Back to blog posts </Link>
        <span style={{ float: "right" }}>
          Send me feedback{" "}
          <a
            href="https://twitter.com/iShivangiDas"
            target="_blank"
            id="twitter"
            title="Twitter"
            rel="noopener noreferrer"
          >
            {" "}
            @iShivangiDas
            <i className="icon-twitter" aria-hidden="true" />
          </a>
        </span>
      </section>
    );
  }
}
export default PostFooter;
