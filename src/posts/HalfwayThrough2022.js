import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Halfway through 2022</h1>
        <small>July 23, 2022</small>

        <article>
          <p>
            Been a while since I last shared what I was learning, doing, watching, or thinking. Life has been busy and I have been using all my free time to do nothing and learn to relax. Did have a few changes (moved house with my partner) and a few changes are coming up. The weather has been crazy (global warming scaring me a lot), also saw so many rainbows.
          </p>
          <hr />
          <h3>What am I reading</h3>
          <p>
            I have been binging on the Discworld series by Terry Prachett, the Captain Vimes and Carrot storyline. He was one of the few white male authors I'm still okay reading after my year of only female and LGBTQ authors. By the way, this change has been sooooo good, I have come across some amazing, relatable, and extremely well written characters. Plus the stories just make sense. I have higher expectations from books now :D
          </p>
          <h3>What am I doing</h3>
          <p>
                    Been on a few trips, went to India for Sur's wedding, explored some more of UK and finally had a formal graduation ceremony in Bristol. Had friends over at my new place which was so much fun.
                    My partner has got me into wood-working and we have been building furniture over the weekends. It's a wonderful feeling to see ideas turn into functional things. Creating is awesome!
          </p>
          <h3>What am I listening to</h3>
          <p>
            Hooked onto the{" "}
            <a
              href="https://open.spotify.com/show/4jWkbLYqVv93FjLkAcvZ1y"
              target="_blank"
              rel="noopener noreferrer"
            >
              "Girls that invest"
            </a>{" "}
            podcast by Sim and Sonya. They talk about personal finance and I find them very relatable. Also looking forward to their book.
          </p>
          
          
          <p>That's all for this <del>week</del> period of time!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
