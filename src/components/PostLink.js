import React from "react";
import { Link } from "react-router-dom";
class PostLink extends React.Component {
  render() {
    const props = this.props;
    return (
        <>
        <article>
            
            <div className="listClass">
                <Link to={props.link}>
                {props.icon ? props.icon : ""}
                {props.name}</Link>{" "}
                <small>{props.date}</small>
            </div>
            <small>{props.description}</small>
        </article >
        <hr />
        </>
    );
  }
}

export default PostLink;