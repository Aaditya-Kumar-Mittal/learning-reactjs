import React, { Component } from "react";
import ReactComponentRefForwarding from "./ReactComponentRefForwarding";

class ReactComponentRefForwardingParent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        <ReactComponentRefForwarding ref={this.inputRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default ReactComponentRefForwardingParent;
