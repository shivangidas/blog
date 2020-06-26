import React, { Component } from "react";
import PostFooter from "../components/PostFooter";
import Code from "../components/code";
class Post extends Component {
  render() {
    var code ='class Layout extends Component {\nconstructor() {\n\tsuper();\n\t\tthis.state = {\n\t\t\tlightTheme: true\n\t\t};\n\tthis.handleThemeChange = this.handleThemeChange.bind(this);\n\t}\nhandleThemeChange() {\n\tif (this.state.lightTheme) {\n\t\tdocument.body.classList.remove("light");\n\t\tdocument.body.classList.add("dark");\n\t\tthis.setState({\n\t\tlightTheme: false\n\t\t});\n\t} else {\n\t\tdocument.body.classList.remove("dark");\n\t\tdocument.body.classList.add("light");\n\t\tthis.setState({\n\t\tlightTheme: true\n\t\t});\n\t}\n}\n....\n<Toggle \n\tdefaultChecked={this.state.lightTheme} \n\tclassName="toggleButton" \n\tonChange={this.handleThemeChange} \n/>';
    var codeHook = 'function Layout() {\nconst [lightTheme, setLightTheme] = useState(true);\nuseEffect(() => {\n\tif (!lightTheme) {\n\t\tdocument.body.classList.remove("light");\n\t\tdocument.body.classList.add("dark");\n\t} else {\n\t\tdocument.body.classList.remove("dark");\n\t\tdocument.body.classList.add("light");\n\t}\n}, [lightTheme]);\n...\n<Toggle \n\tdefaultChecked={lightTheme}\n\tclassName="toggleButton"\n\tonChange={() => setLightTheme(!lightTheme)}\n/>'
    return (
      <>
        <h1>Hooking up my blog</h1>
        <small>June 25, 2020</small>

        <article>
          <p>
            It has been a long time since I first came across Hooks in React but only recently got around to change the state used in this blog (for the theme). It was extremely easy to do and makes me wonder what took me so long.
          </p>
          <hr />
          <h3>Resources</h3>
          <ul>
            <li>
              <a
                href="https://reactjs.org/docs/hooks-intro.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hooks documentation
              </a>
            </li>
            <li>
              First intro from {" "}
              <a
                href="https://www.youtube.com/watch?v=dpw9EHDh2bM"
                target="_blank"
                rel="noopener noreferrer"
              >
                this talk
              </a>
            </li>
          </ul>
          <hr />
          <h3>What is it?</h3>
          <p>
            Hooks is a way to hook into state and lifecycle methods in React without using the class, i.e., directly from function component.
          </p>
          <hr />
          <h3>
            Why? What's the use?
          </h3>
          <p>
            Using hooks makes the code way cleaner. It is also easy to forget to bind this to change functions for state which we can now conveniently remove altogether.<br/>
            <h4>Without Hooks</h4>
            <Code codeString={code} language="language-javascript" />
            <br/>
            
            <h4>With Hooks</h4>
            <Code codeString={codeHook} language="language-javascript" />
          </p>
          <hr />
          
          <h3>Verdict</h3>
          <p>
            OMG I love it. Just the two Hooks useState() and useEffect() were enough to win me over.
          </p>
        </article>
        <PostFooter />
      </>
    );
  }
}

export default Post;
