import React from "react";
import bookImage from "../images/books8.jpg";
class Image extends React.Component {
  render() {
    return (
      <figure>
        <img src={bookImage} alt="books" height="300em" />
        <figcaption>Pretty Books</figcaption>
      </figure>
    );
  }
}

export default Image;
