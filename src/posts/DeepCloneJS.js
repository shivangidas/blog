import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Code from "../components/code";

class Post extends Component {
  render() {
    var normalCopy =
      "var origArray = {x:10,y:[{a:1,b:2}]};\nvar newArray = origArray;\nnewArray.x=11;\nnewArray.y[0].a=20;\nconsole.log(origArray); //{x:11,y:[{a:20,b:2}]}\nconsole.log(newArray);//{x:11,y:[{a:20,b:2}]}";
    var cloneArray =
      "var origArray = {x:10,y:[{a:1,b:2}]};\nvar newArray = JSON.parse(JSON.stringify(origArray));\nnewArray.x=11;\nnewArray.y[0].a=20;\nconsole.log(origArray);//{x:10,y:[{a:1,b:2}]}\nconsole.log(newArray);//{x:11,y:[{a:20,b:2}]}";

    return (
      <>
        <h1>
          How to make a deep clone of an object/array-object/object-array?
        </h1>
        <small>June 04, 2019</small>

        <article>
          <p>
            {" "}
            If one tries to do object a = object b to make a copy of 'b', you
            end up with a reference to object 'b'. That means any change to 'a'
            will affect b's values, too. Except when we are dealing with
            non-nested array.
          </p>
          <Code codeString={normalCopy} language="language-javascript" />
          <p>
            A deep clone is one where you can make a copy and get just the
            values, not the reference.
          </p>

          <p>
            The most simple way to do it is to stringify and then parse the
            object/array.
          </p>
          <Code codeString={cloneArray} language="language-javascript" />
          <p>
            There are functions one can use like Object.assign, Object.create
            but they come with shortcomings and this is my favorite.
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
