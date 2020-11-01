import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <a
          href="https://www.goodreads.com/book/show/11865807-good-omens"
          style={{ float: "left", paddingRight: "20px" }}
        >
          <img
            border="0"
            alt="Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch"
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1328347631l/11865807._SY160_.jpg"
          />
        </a>
        <a href="https://www.goodreads.com/book/show/11865807-good-omens">
          Good Omens: The Nice and Accurate Prophecies of Agnes Nutter, Witch
        </a>{" "}
        by Terry Pratchett and Neil Gaiman
        <br />
        My rating:{" "}
        <a href="https://www.goodreads.com/review/show/1636311091">
          5 of 5 stars
        </a>
        <br />
        <br />
        Oh what can I say that has not already been said. This book feels great.
        It is funny, for real.
        <br />
        And boy! It makes you think. Loved every single chapter, page, word of
        it. Still basking in it's warmth.
        <br />
        <br />
        <PostFooter />
      </>
    );
  }
}

export default Post;
