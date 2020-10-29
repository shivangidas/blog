import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <a
          href="https://www.goodreads.com/book/show/40180098-the-overstory"
          style={{ float: "left", paddingRight: "20px" }}
        >
          <img
            border="0"
            alt="The Overstory"
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562786502l/40180098._SX98_.jpg"
          />
        </a>
        <a href="https://www.goodreads.com/book/show/40180098-the-overstory">
          The Overstory
        </a>{" "}
        by{" "}
        <a href="https://www.goodreads.com/author/show/11783.Richard_Powers">
          Richard Powers
        </a>
        <br />
        My rating:{" "}
        <a href="https://www.goodreads.com/review/show/3456527716">
          5 of 5 stars
        </a>
        <br />
        <br />
        A Chinese proverb that will stay with me forever - 'the best time to
        plant a tree was 20 years ago. The second best time is now.'
        <br />
        <br />I thank the author for writing this book. I will never look at
        trees the same way again.
        <br />
        It's long and yet I didn't want it to finish.
        <br />
        <br />
        <PostFooter />
      </>
    );
  }
}

export default Post;
