import React, { Component } from "react";
import PostFooter from "../components/PostFooter";

class Post extends Component {
  render() {
    return (
      <>
        <a
          href="https://www.goodreads.com/book/show/40961230-the-travelling-cat-chronicles"
          style={{ float: "left", paddingRight: "20px" }}
        >
          <img
            border="0"
            alt="The Travelling Cat Chronicles"
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532711745l/40961230._SX98_.jpg"
          />
        </a>
        <a href="https://www.goodreads.com/book/show/40961230-the-travelling-cat-chronicles">
          The Travelling Cat Chronicles
        </a>{" "}
        by{" "}
        <a href="https://www.goodreads.com/author/show/4823030.Hiro_Arikawa">
          Hiro Arikawa
        </a>
        <br />
        My rating:{" "}
        <a href="https://www.goodreads.com/review/show/3601208855">
          5 of 5 stars
        </a>
        <br />
        <br />
        I have had friends that loved pets but I have never been an
        animal-lover. This book is so well written it brought tears to my eyes
        way too many times.
        <br />
        <br />
        <PostFooter />
      </>
    );
  }
}

export default Post;
