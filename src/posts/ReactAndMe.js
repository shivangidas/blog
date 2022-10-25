import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
// import Image from "../components/image";
// import books from "../images/books8.jpg";
class Post extends Component {
  render() {
    return (
      <>
        <h1>My relationship with React</h1>
        <small>March 31, 2019</small>

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
            Abramov.
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
                This tutorial on Scrimba
              </a>
            </li>
            <li>
              Learnt Hooks from{" "}
              <a
                href="https://www.youtube.com/watch?v=dpw9EHDh2bM"
                target="_blank"
                rel="noopener noreferrer"
              >
                this talk
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
              A little help from{" "}
              <a
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                FreeCodeCamp
              </a>
            </li>
          </ul>
          <hr />
          <h3>Things I love to hate</h3>
          <p>Edit [25-10-2022]: I just re-routed this, client-side routing is a lot easier now.</p>
          <p>
            Will someone please tell me how to deal with client-side routing?!
            It has been annoying me for weeks now! I ended up using{" "}
            <code>hashHistory</code> for this blog. You can see the ugliness in
            the address bar.
          </p>
          <hr />
          <h3>Side-effects</h3>
          <p>
            As a side-effect of learning React, I have been receiving multiple
            interview calls.
            <br />I had started this blog with React then moved to plain HTML5/
            CSS3/ JavaScript because who wants to use so many technologies for a
            simple static site. However, I started missing the amazing state
            management facility and again switched to React.
          </p>
          <hr />
          <h3>Verdict</h3>
          <p>
            I love how well-thought out the whole eco-system is. You need it,
            they got it. However, I remain skeptical about the fact that it is
            owned by Facebook.
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
