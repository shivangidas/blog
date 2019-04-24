import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Code from "../components/code";
import "../styles/prism.css";
class Post extends Component {
  render() {
    var opOverloadCode = 'a = 2 * 3 #Output 6 \nb = "2" * 3 #Output 222';
    var floorDivCode =
      "a = 9 / 2 #Output 4.5 'normal division'\nb = 9 // 2 #Output 4 'floor division'";
    return (
      <>
        <h1>Python tidbits</h1>
        <small>April 22, 2019</small>

        <article>
          <p>
            I coded in python in the deeplearning.ai specialization on Coursera
            but only recently took up learning python as a stand alone
            programming language. Well, actually part of it, a very little part.
            Here's everything I liked and disliked. Mostly liked, because
            (spoiler) python is pretty awesome.
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              Kaggle's{" "}
              <a
                href="https://en.wikipedia.org/wiki/Overfitting"
                target="_blank"
                rel="noopener noreferrer"
              >
                micro-course on python
              </a>
            </li>
          </ul>
          <hr />
          <h3>No declaration!</h3>
          <p>
            I love JavaScript for its simple <code>var</code> (and now{" "}
            <code>let</code> and <code>const</code>) used for variable
            declaration. However, python won me over with it's no declaration
            required at all. Way to keep it simple!
          </p>
          <hr />
          <p>There's some fun with operator overloading</p>

          <Code codeString={opOverloadCode} language="language-python" />
          <p>Floor division is something I had not seen before.</p>
          <Code codeString={floorDivCode} language="language-python" />
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
