import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import blogger_issue from "../images/blogger.PNG";
class Post extends Component {
  render() {
    return (
      <>
        <h1>What's in a name?</h1>
        <small>April 15, 2019</small>

        <article>
          <p>
            In machine learning, when a model learns the training data too well
            and fails with new data, we call it overfitting. This blog is
            overfitted to my needs and hence I decided to name it so.
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Overfitting"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wikipedia's explanation
              </a>
            </li>
            <li>
              <a
                href="https://www.coursera.org/lecture/machine-learning/the-problem-of-overfitting-ACpTQ"
                target="_blank"
                rel="noopener noreferrer"
              >
                Andrew Ng's explaination
              </a>
            </li>
          </ul>
          <hr />
          <h3>Why does this blog exist?</h3>
          <p>
            I decided to start this blog because of the following reasons:
            </p>
            <ul>
              <li>
                Whenever I am asked the same questions by different people about
                the same topic, I know that topic needs a blog.
              </li>
              <li>Blogging helps me understand things.</li>
              <li>It also helps to remember complex topics.</li>
              <li>Most importantly because I can and it is fun!</li>
            </ul>
          
          <hr />
          <h3>Why did I move from blogger?</h3>
          <p>
            Because I hate these
            </p>
            <Image
              src={blogger_issue}
              alt="alignment issues in blogger"
              caption="Alignment issues!"
              width="100%"
              height="auto"
            />
          
          <hr />
          <h3>Verdict</h3>
          <p>
            This blog is mostly for me: to clarify my doubts, to make things
            easier for me, or to express my opinion. I include resources in
            every post for people who may stumble upon my blog. However,
            sometimes maybe our doubts will match and Overfitted's post may end
            up fitting your needs. Cheers to that!{" "}
            <span role="img" aria-label="cheers">
              &#127867;
            </span>
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
