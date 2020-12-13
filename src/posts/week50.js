import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 50: Alone, not lonely. Yet.</h1>
        <small>December 12, 2020</small>

        <article>
          <p>
            I have spent 12 days in Newcastle now and am mostly loving the
            place. Currently it feels like I'm on a R & R vacation. The weather
            has not been helpful but it is still fun going out in the rain if
            I'm dressed for it (and it always rains in England so not a
            shocker). I have been experimenting with food and actually enjoying
            it. I am extremely thankful to all the people checking in on me
            these days.
          </p>
          <hr />
          <h3>Books</h3>
          <p>
            <strong>
              <a
                href="https://www.goodreads.com/book/show/33413128-beartown"
                target="_blank"
                rel="noopener noreferrer"
              >
                Beartown by Fredrik Backman
              </a>
            </strong>
            <br></br>
            I joined a local library today! I'm so excited! I haven't been a
            member of a city library in forever. <br />
            The book I read this week was really good. It began with ice hockey
            and turned into a tale of people. The suspense at every point was
            nicely done. Also found out it's the first book in a series :)
          </p>

          <h3>Quotes</h3>
          <p>
            I liked everything in the book I have been reading. A few of the
            lines from it:
            <br />
            <strong>
              “Fighting isn’t hard. It’s just hard to know when to throw the
              first punch.”{" "}
            </strong>
            <br />
            <strong>
              “Then she stands there and howls, with an echo that will never
              fall silent in her heart.”
            </strong>
            <br />
            How I wish I could do that!
            <br />
          </p>

          <h3>What am I watching</h3>
          <p>Addictively watching The Office while I wait to start work :D</p>
          <h3>Short read</h3>
          <p>
            An article on{" "}
            <strong>
              <a
                href="https://nesslabs.com/selective-ignorance?mc_cid=4dfec1b2a3&mc_eid=3a522e62a6"
                target="_blank"
                rel="noopener noreferrer"
              >
                selective ignorance
              </a>
            </strong>
            . It was a nice read that encourages cutting down on social media
            and draining conversations; being selective of what you want to
            learn.
          </p>
          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
