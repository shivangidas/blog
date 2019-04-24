import React from "react";

class Code extends React.Component {
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
