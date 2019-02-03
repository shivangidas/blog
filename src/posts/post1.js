import React, { Component } from "react";
import "./post.css";
import Image from "../components/image";
import books from "../images/books8.jpg";
class Post extends Component {
  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <h1>I am pos 1</h1>
          <Image alt="Books" src={books} height="300px" />
        </header>
      </div>
    );
  }
}

export default Post;
