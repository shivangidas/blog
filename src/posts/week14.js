import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <h1>Week 14: Things have been amazing all things considered</h1>
        <small>April 11, 2021</small>

        <article>
          <p>
            I explored another beach, Sandhaven in South Shields. It was so huge
            and so clean. I also found a park with a lake with hundreds of birds
            :). Oh and yesterday I walked 5 out of the 7 famous bridges in
            Newcastle upon Tyne. I have been trying to keep busy so I don't have
            time to think all the negative thoughts. I researched investing in
            UK, and have started that. I quite enjoy it.
          </p>
          <hr />
          <h3>What am I reading</h3>
          <p>
            <strong>
              <a
                href="https://www.goodreads.com/book/show/30736658-never-split-the-difference"
                target="_blank"
                rel="noopener noreferrer"
              >
                Never split the difference by Chris Voss
              </a>
            </strong>
            <br />I am currently thoroughly enjoying this book. It's kind,
            insightful, encouraging, enlightening; all the good stuff you would
            want from a non-fiction. Such a good investment!
          </p>

          <h3>What am I watching</h3>
          <p>
            I found out one of the books I had loved has an anime adaptation,{" "}
            <a
              href="https://www.amazon.co.uk/gp/video/detail/B01M3P7K35/ref=atv_dp_share_cu_r"
              target="_blank"
              rel="noopener noreferrer"
            >
              The Great Passage by Shion Miura
            </a>
            . It's about people being deeply passionate about things :)
          </p>
          <h3>What am I thinking</h3>
          <p>
            <strong>Multiplication tables make no sense</strong>
            <br />
            Why? Why do we force kids to learn multiplication tables? Teach them
            to multiply. It's not like they need to be fast, there are
            calculators and computers for speed. You are asking me to memorise
            things I can calculate? Just why? Also why in the world do you want
            me to hold my groceries while I want to cook. That's how I feel
            about memorizing things. I will myself not to memorize things. I
            like having a repository of things I found, not memorized. That
            works.
          </p>
          <h3>What scared me</h3>
          <p>
            I thought I was having a heart attack. I legit checked the symptoms
            on NHS and I had shortness of breath (because my body temperature
            gets really high and I was boiling in the quilt); my head, neck and
            arms were hurting; I had anxiety. I would have called 999 but
            something held me back. Something that is engrained in me, something
            that prevents me from ‘making a scene’ when I feel I’m dying. Yeah,
            that’s what I call a medical emergency if it involves me. I woke up
            multiple times during the night and morning. Finally in the
            afternoon my periods started and then things started to make sense.
            Although I'm so tired of not being able to ask for help.
          </p>
          <p>That's all for this week!</p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
