import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 2: I started working and I like it</h1>
        <small>January 9, 2021</small>

        <article>
          <p>
            It's the week I started work at DWP digital. I had no idea working
            from home would be so comfortable :D. I am going to invest time to
            go completely remote in the future. Moreover, it snowed again and
            was extremely gorgeous. I also had my first experience of walking on
            ice which was scary. I love how many new firsts I have these days.
          </p>
          <hr />
          <h3>Books</h3>
          <p>
            <strong>
              <a
                href="https://app.thestorygraph.com/books/3f42b16e-f3e3-49ae-a480-5528193a52ad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Such a fun age by Kiley Reid
              </a>
            </strong>
            <br />
            This was a really good read. I loved how flawed the characters were,
            like regular humans.
          </p>

          <h3>Podcast</h3>
          <p>
            I listened to an interview of{" "}
            <strong>
              <a
                href="https://open.spotify.com/episode/2rE69tZl4IxQ0psdCmBzn7"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Martine Rothblatt
              </a>
            </strong>
            . They mentioned humanity is not either strictly male or female
            which kinda made me think. The interview talks about transgender and
            bridging the gap between electronics and the brain. I learned there
            are nerves in the ear that can make things better.
          </p>

          <h3>Quotes</h3>
          <p>
            Not a quote per se but a paragraph from an{" "}
            <a
              href="https://www.ricemedia.co/the-science-behind-hating-someone-for-their-voice/"
              target="_blank"
              rel="noopener noreferrer"
            >
              article
            </a>{" "}
            I read on how we respond to different voices differently.
            <br />
            <strong>
              If you do happen to find someone’s voice annoying, whether they
              are male, female, or anything in between, it doesn’t make you an
              asshole. But if you choose to let that annoyance inform how you
              behave towards that person, then yes, you are indeed an asshole.
            </strong>
          </p>
          <h3>What am I watching</h3>
          <p>
            Really into anime these days. I watched Soul. The movie turned out
            quite good with a very Disney/Pixar message about living your life
            :)
          </p>
          <h3>What inspired me</h3>
          <p>
            <a
              href="https://github.blog/2020-12-21-how-we-built-the-github-globe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github’s globe of pull requests
            </a>{" "}
            reminds me why I love web dev.
          </p>
          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
