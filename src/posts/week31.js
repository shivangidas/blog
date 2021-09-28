import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 31: Things are still amazing on surface.</h1>
        <small>August 5, 2021</small>

        <article>
          <p>
            With things opening up, life has been a little busy. I managed to
            explore a bit of UK. Work got taxing and more rewarding. Really
            enjoying saving money, slowly learning about taxes and other things.
          </p>
          <hr />
          <h3>What am I reading</h3>
          <p>
            <strong>
              <a
                href="https://www.goodreads.com/book/show/39329810-the-great-dune-trilogy"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Great Dune trilogy by Frank Herbert
              </a>
            </strong>
            <br />
            Got this book as a present after obsessing about how I cannot watch
            the movie before reading the book :)
          </p>
          <p>
            {" "}
            Need to mention two reads I have enjoyed and learned from these past
            months:{" "}
            <strong>
              <a
                href="https://www.goodreads.com/book/show/18079683-boy-snow-bird"
                target="_blank"
                rel="noopener noreferrer"
              >
                Boy, Snow, Bird by Helen Oyeyemi
              </a>
            </strong>{" "}
            and{" "}
            <strong>
              <a
                href="https://www.goodreads.com/book/show/18079683-boy-snow-bird"
                target="_blank"
                rel="noopener noreferrer"
              >
                Clap When You Land by Elizabeth Acevedo
              </a>
            </strong>
          </p>
          <h3>What/where I'm exploring</h3>
          <p>
            Went on a trip to Edinburgh because I so badly wanted to. Climbed up
            Arthur's seat this time and had really delicious food, plus it
            didn't rain at all which is an anomaly in Edinburgh :D. Explored a
            wonderful second hand bookshop, Barter Books, in Alnwick,
            Northumberland. I explored the Shamble's market on a day trip to
            York; so much awesome food. And went on a date to Durham; it was
            perfect.
          </p>
          <h3>What am I doing</h3>
          <p>
            I gave a talk on JavaScript for CodeFirstGirls! It was an intro to
            JS, an hour long session with a colleague and some 400 people. Also
            here's an interview I did for{" "}
            <a
              href="https://wearetechwomen.com/in-her-shoes-shivangi-das-software-developer-dwp-digital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              InHerShoes
            </a>{" "}
            with Women in Tech!
          </p>
          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
