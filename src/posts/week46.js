import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import cemetery from "../images/cemetery.jpg";
import cliftonBridge from "../images/cliftonbridge.jpg";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 46: a rollercoaster of emotions</h1>
        <small>November 13, 2020</small>

        <article>
          <p>
            What a week has it been! I was freaking out for part of it because
            things I needed were taking time (two weeks delay!). Lesson learnt:{" "}
            <i>Don’t assume anything. Get dirty, ask, enquire, confront.</i> It
            is especially important to remind myself of this since I am
            inherently an introvert. It helps tremendously that I am now
            consuming content with the intent of producing. This practice makes
            me calm, knowing I am going to learn something new. I read so many
            things this week that it has been hard to choose the best of it.
            Here goes ...
          </p>
          <hr />
          <h3>Blog</h3>
          <p>
            As promised last week, more from{" "}
            <i>
              <a
                href="https://waitbutwhy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wait but why
              </a>
            </i>{" "}
            by Tim Urban. This week I worked through a{" "}
            <a
              href="https://waitbutwhy.com/2018/04/picking-career.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              long article on <strong>picking a career</strong>
            </a>
            , or rather picking multiple careers depending on the changing times
            and you. It was an excellent exercise on self-reflection and I feel
            like I am learning a lot about my own thinking process.
          </p>
          <h3>What am I listening to: Podcast</h3>
          <strong>
            <a
              href="https://open.spotify.com/show/40O0Lbp5ockSt0qSogo6q1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>Building a second brain</i>{" "}
            </a>
          </strong>{" "}
          podcast by Tiago Forte. I listen to him on my walks and come home with
          new ideas or confirmation of my own ideas (exciting when that
          happens). Highly recommend trying it out. He has some interesting
          views on capturing ideas and building a reservoir of resources called
          the Second Brain.
          <h3>What am I listening to: Music</h3>
          <p>
            <a
              href="https://tomlehrersongs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>
                Songs by <strong>Tom Lehrer</strong>
              </i>{" "}
            </a>
            who recently released all this work in the public domain.
          </p>
          <p>
            I am also listening to Steely Dan because John Mulaney, a
            comedian/actor/writer I like, likes Steely Dan :D
          </p>
          <h3>Book I enjoyed</h3>
          <p>
            <strong>Doctors by Erich Segal</strong>
            <br /> Segal of the Love Story fame, provides a glimpse into the
            lives of medical students, researchers and doctors. I thoroughly
            enjoyed reading it.
          </p>
          <h3>Books for anti-library</h3>
          <p>
            <strong>
              <a
                href="https://www.goodreads.com/book/show/32919530-a-mind-at-play"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>A mind at play</i>
              </a>
            </strong>
            <br /> I am sad I didn't come across this sooner. A biography of
            Claude Shannon, the man who suggested bits (0s and 1s) could be used
            to store information.
          </p>
          <p>
            <strong>
              <a
                href="https://www.goodreads.com/book/show/53041664-the-incredible-journey-of-plants"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>The Incredible Journey of Plants</i>
              </a>
            </strong>{" "}
            by Stefano Mancuso. It sounds like an exciting book about plants
            especially the evil ones.
          </p>
          <h3>Activity</h3>
          <p>
            The weather was pleasant this week and I got some great pictures.
            <Image
              src={cemetery}
              alt="Path through cememtery"
              caption="There's something about cemeteries that brings a calm to me."
              width="100%"
              height="auto"
            />
            <Image
              src={cliftonBridge}
              alt="Clifton Suspension Bridge"
              caption="Clifton Suspension Bridge in the twilight"
              width="100%"
              height="auto"
            />
          </p>
          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
