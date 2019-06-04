import React from "react";
import Prism from "prismjs/components/prism-core";
import "prismjs/components/prism-python";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "../styles/prism.css";
class Code extends React.Component {
  componentDidMount() {
    Prism.highlightAll();
  }
  render() {
    const codeProps = this.props;
    return (
      <pre>
        <code className={codeProps.language}>{codeProps.codeString}</code>
      </pre>
    );
  }
}

export default Code;
