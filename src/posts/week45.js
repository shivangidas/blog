import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Image from "../components/image";
import pic1 from "../images/pic1.jpg";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Things I read, did, pondered this week (45)</h1>
        <small>November 6, 2020</small>

        <article>
          <p>
            Last few days I have had a little too much time on my hands which
            means I have been consuming a lot more content than usual. They say
            the consumption and production of content should be balanced. "Who's
            they?" you ask; they are the people who have some of the life shit
            figured out. Therefore I am starting this weekly update of things I
            have read, done, thought of to make some deposit in the produce
            section. This is week 45 of the year 2020.
          </p>
          <hr />
          <h3>Blog</h3>
          <p>
            <strong>
              <a
                href="https://waitbutwhy.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Wait but why
              </a>
            </strong>
            <br />I came across this gem of a blog and I have been restraining
            myself from devouring every single thing on it. This week I leave
            you with{" "}
            <a
              href="https://waitbutwhy.com/2014/05/life-weeks.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Your Life in Weeks"
            </a>{" "}
            by Tim Urban. I wouldn't spoil by saying anything about it but it is
            absolutely amazing. Expect a lot more of this blog in my future
            posts :)
          </p>
          <h3>Quotes</h3>
          <p>
            <strong>
              <i>The best days are in front of you, not behind</i>
            </strong>
            <br />
            <br />
            Sometimes when I am not busy working, travelling, or with anything
            else, I tend to get nostalgic for the past. Coming across this quote
            during such a period was very special. Later I came across another
            quote on the TechLadies forum that I have put up on a sticky note on
            my desk (it is that important to me). <br />
            <br />
            <strong>
              <i>Remember that you once dreamed of being where you are now.</i>
            </strong>
          </p>
          <h3>Books</h3>
          <p>
            I found a book I want to add to my library{" "}
            <a
              href="https://www.goodreads.com/book/show/56627.Stumbling_on_Happiness"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Stumbling on happiness"
            </a>{" "}
            by Daniel Todd Gilbert.
          </p>
          <p>
            Have you heard of an anti-library? It is the concept of buying books
            for your library not for immediate consumption but to build a
            collection for later research. I think this book is going to be a
            part of my anti-library.
          </p>
          <h3>Activity</h3>
          <p>
            There is a lockdown in England and I have committed to moving more
            ^-^. Currently I am posting pictures of the highlight of the day on
            my Instagram stories. Here's a sample </p>
            <Image
              src={pic1}
              alt="Library book in front of a university sign"
              caption="Borrowed this classic from the library"
              width="100%"
              height="auto"
            />
          
          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
