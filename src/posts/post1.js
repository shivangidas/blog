import React, { Component } from "react";
import "./post.css";
import Image from "../components/image";
import books from "../images/books8.jpg";
class Post extends Component {
  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <h1>I am post 1</h1>
          <Image alt="Books" src={books} height="200px" />
          <p>
            Oh God! Routing was so easy and I was so confused by how to do it.
            The first post will be about routing when I get to writing it.
          </p>
        </header>
      </div>
    );
  }
}

export default Post;
