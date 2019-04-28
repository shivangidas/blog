import React from "react";
import Prism from "prismjs/components/prism-core";
import "prismjs/components/prism-python";
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
