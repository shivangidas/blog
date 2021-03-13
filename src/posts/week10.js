import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 10: Time goes by fast when you're happy</h1>
        <small>March 13, 2021</small>

        <article>
          <p>
            Ahrrgghhh things are freaking odd right now. I'm anxious and happy
            and sad and feeling way too many feelings. Work is dope! I am
            finally using typescript :D. Newcastle is being a darling; new views
            in the same area when I take a slightly different path are a norm.
            The weather has been amazing and I've been cooking up a storm :).
            The public speaking class I had mentioned last time, they sent some
            fun swag, including a book! My talk isn't ready yet, I'm halfway
            through and having a ton of fun doing it.
          </p>
          <hr />
          <h3>Podcast</h3>
          <p>
            Interview with{" "}
            <strong>
              <a
                href="https://open.spotify.com/episode/4cgNCa4I6FjUijazJPVHVs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mr. Money Mustache (Pete Adeney)
              </a>
            </strong>
            <br />
            It was a very relatable talk, loved the idea of removing things from
            your life to be happy rather than accumulating more. Apply this to
            people, too.
          </p>
          <h3>Quotes</h3>
          <p>
            The world feels a little brighter when we create something that
            wasn't there before.
          </p>
          <h3>What am I doing</h3>
          <p>
            I walk a lot. It's awesome! I sort of got back into boxing, (more
            like following a few classes online) after a bout of sadness. I got
            some plants two weeks back and they are thriving (almost), learning
            about caring for them. I am also learning sign language, haven't
            found a great app, however it's been interesting what I have learnt.
            I can understand quite a lot of the dialogue when I see someone
            signing in a movie.
          </p>
          <h3>Books</h3>
          <p>
            Letting Sandman seduce me. Oh what an amazing comics have Neil
            Gaiman and others created in the form of Sandman. Last weekend went
            in a happy haze while I read books 2-4. Had to wait for volume 5 but
            it is here now. I'm conflicted between reading it all at once and
            experiencing extreme pleasure or stretching it out for months
            because I don't know if I'll enjoy something in this specific way
            again.
            <br />
            I'm also reading a book suggested in the podcast, "The magic of
            thinking Big" by David Schwartz, PhD. I am sort of having fun
            reading a book written more than half a century ago. I love how the
            author treats every subject, it's almost funny but not quite.
          </p>
          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
