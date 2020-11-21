import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import bridge from "../images/bridge.jpg";
class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 47: The week of waiting</h1>
        <small>November 21, 2020</small>

        <article>
          <p>
            Things haven't changed much from last week but I have changed my
            perspective on them and hence freaking out a little less. Pretty
            happy with the week; I worked out, read, blogged, walked, and took
            many breathers. This week was about memoirs.
          </p>
          <hr />
          <h3>Podcast</h3>
          <p>
            <strong>
              <a
                href="https://open.spotify.com/show/40O0Lbp5ockSt0qSogo6q1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i>Building a second brain</i>{" "}
              </a>
            </strong>{" "}
            podcast by Tiago Forte. Continuing from last week, I have now
            completed all the episodes. Some of my favourite takeaways:
            <ul>
              <li>
                Ideas don't belong to one person. Once you read something, you
                interpret it and it becomes yours.{" "}
              </li>
              <li>
                You don’t need to remember everything. In fact you shouldn’t.
                How are you supposed to cook while you’re carrying the
                groceries? You need to put your ideas down somewhere.
              </li>
              <li>
                Don’t record ideas in categories. Make projects and use the
                ideas directly.
              </li>
            </ul>
          </p>
          <p>
            I also listened to an incredible interview of
            <a
              href="https://open.spotify.com/episode/2kBwLiJoGvZyk9BzIi8sIJ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i> Mary Karr</i>
            </a>
            , a memoirist, on Tim Ferris' podcast. I am so glad to have access
            to this and an inclination for learning about mental health. I am
            looking forward to reading her memoirs.
          </p>
          <h3>What am I reading</h3>
          <p>
            <a
              href="https://www.goodreads.com/book/show/29780253-born-a-crime"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>
                Born a Crime: Stories From a South African Childhood
              </strong>{" "}
            </a>
            by
            <strong> Trevor Noah</strong>
            <br />
            It is a memoir. Adding my review from Goodreads below:
          </p>
          <p>
            <strong>
              <i>
                "Being chosen is the greatest gift you can give to another human
                being."
              </i>
            </strong>
            <br />
            Pretty much all of the book is worth remembering. One line that made
            me go woah! was:{" "}
            <i>
              My mom raised me as if there were no limitations on where I could
              go or what I could do. When I look back I realize she raised me
              like a white kid—not white culturally, but in the sense of
              believing that the world was my oyster, that I should speak up for
              myself, that my ideas and thoughts and decisions mattered.
            </i>{" "}
            <br />
            I have always referred to approaching negotiations as a white
            person, go in with the assumption that you deserve it.
            <br /> Trevor Noah has written a great book and I would highly
            recommend everyone to read it.
            <br />
          </p>
          <h3>Books for anti-library</h3>
          <p>
            <a
              href="https://www.goodreads.com/book/show/25508114-the-art-of-memoir"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>The art of memoir</strong>{" "}
            </a>{" "}
            by Mary Karr.
            <br />
            For the day I would want to be a memoirist.
          </p>
          <h3>Quotes</h3>
          <p>
            <strong>
              To be “bored” is to be free of distraction. - Craig Mod
            </strong>
            <br />
            New goal in life: be bored :)
          </p>
          <p>
            <strong>
              What is not started will never get finished - Johann Wolfgang von
              Goethe
            </strong>
            <br /> Stating the obvious Mr. Wolfgang but boy do I need it.
          </p>
          <h3>Music</h3>
          <p>
            <a
              href="https://open.spotify.com/album/6FoLUhYlbncGfVYckWTqLv"
              target="_blank"
              rel="noopener noreferrer"
            >
              Songs from a new movie <strong>Ludo</strong>{" "}
            </a>
            <br />
            Been listened to a song <i>Aabaad Barbaad</i> on repeat. It's
            playing right now :D
          </p>
          <h3>What am I doing</h3>
          <p>
            I got in some indoor exercise and a couple of walks.
            <Image
              src={bridge}
              alt="Clifton suspension bridge"
              caption="One of the 1000 photos of the Clifton Suspension Bridge"
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
