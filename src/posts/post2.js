import React, { Component } from "react";
import "./post.css";
import Image from "../components/image";
import books from "../images/books8.jpg";
class Post extends Component {
  render() {
    return (
      <div className="Post">
        <header className="Post-header">
          <h1>I am post 2</h1>
        </header>
        <Image alt="Books" src={books} height="300px" caption="Pretty books" />
      </div>
    );
  }
}

export default Post;
