import React, { Component } from "react";
// import Image from "../components/image";
// import books from "../images/books8.jpg";
class Post extends Component {
  render() {
    return (
      <>
        <h1>My relationship with React</h1>
        <blockquote>Will it survive the year?</blockquote>
        <article>
          <p>
            I started learning React out of curiosity seeing the amazing things
            people in my Twitter feed were building with it. A typical case of
            what millennials call FOMO. (I wonder if I need a hashtag there.)
          </p>
          <hr />
          <h3>The fun stuff</h3>
          <p>
            With React I had the opportunity to use JavaScript in its raw form.
            I have been using jQuery for 4 years (don't cringe) and had almost
            forgotten how powerful JavaScript is on its own. I enjoyed trying
            out Next.js, Gatsby, and other ready-to-deploy tools(?). Was
            awestruck by create-react-app and it's amazing developer Dan
            Abramov. Also, learnt the test-driven approach in Dan's Redux
            tutorial.
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              The{" "}
              <a
                href="https://facebook.github.io/create-react-app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                create-react-app
              </a>{" "}
              documentation is amazing
            </li>
            <li>
              <a
                href="https://scrimba.com/p/p7P5Hd/cBv8ruL"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scrimba
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=dpw9EHDh2bM"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learnt Hooks from this talk
              </a>
            </li>
            <li>
              <a
                href="https://egghead.io/courses/getting-started-with-redux"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux by Dan Abramov
              </a>
            </li>
            <li>
              <a
                href="https://learnredux.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux by Wes Bos
              </a>
            </li>
            <li>
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                A little help from FreeCodeCamp
              </a>
            </li>
          </ul>
          <hr />
          <h3>Side effects</h3>
          As a side-effect of learning React, I have been receiving multiple
          interview calls, too :)
          <br />
        </article>
      </>
    );
  }
}

export default Post;
