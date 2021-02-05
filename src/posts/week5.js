import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 5: I'm happy and I know it</h1>
        <small>February 5, 2021</small>

        <article>
          <p>
            It's finally February! I'm turning 30 this month and extremely
            excited about it. Work has been fun. Though it's now difficult to
            blog often when I have already spent 8 hours in front of a computer.
            I have free time these days otherwise hence doing things I love
            other than coding. I went to the beach and came home frozen. I'm
            also happy for something I had not quite expected :)
          </p>
          <p>
            In other news, joined a public speaking event/class for and by women
            in tech. It has been fun, refreshing and educational so far. First
            session takeaway: it’s amazing how many ideas you have when you
            start thinking about it.
          </p>
          <hr />
          <h3>Podcast</h3>
          <p>
            {" "}
            Interview with{" "}
            <strong>
              <a
                href="https://open.spotify.com/episode/0hhoEKiXJuNM43Wa0DVjpA"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dr. Stefi Cohen
              </a>
            </strong>
            <br />
            Something that stayed with me:{" "}
            <strong>When in pain stop doing what is hurting!</strong>
            <br />
            Sounds reasonable but very hard to do, I can say from experience.
          </p>
          <h3>Quotes</h3>
          <p>We don’t have enough time to do all the nothings we want to do.</p>
          <h3>What am I watching</h3>
          <p>
            WandaVision! Oh what an incredibly weird show! Loving it so far.
            Also watching Mandalorian which is amazing because star wars :)
          </p>
          <h3>What am I listening to</h3>
          <p>
            I am finally trying Audible, currently listening to the midnight
            library, which I am enjoying way more than I thought I would.
          </p>
          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
