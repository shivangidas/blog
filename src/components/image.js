import React from "react";

class Image extends React.Component {
  render() {
    const imageProps = this.props;
    return (
      <figure>
        <img
          src={imageProps.src}
          alt={imageProps.alt}
          height={imageProps.height ? imageProps.height : ""}
          width={imageProps.width ? imageProps.width : ""}
        />
        <figcaption>
          <i>{imageProps.caption ? imageProps.caption : ""}</i>
        </figcaption>
      </figure>
    );
  }
}

export default Image;
