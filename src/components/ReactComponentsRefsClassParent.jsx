import React, { Component } from "react";
import ReactComponentsRefsClass from "./ReactComponentsRefsClass";

class ReactComponentsRefsClassParent extends Component {
  constructor(props) {
    super(props);

    this.componentRef = React.createRef();
  }

  clickHandler = () => {
    this.componentRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <ReactComponentsRefsClass ref={this.componentRef} />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default ReactComponentsRefsClassParent;
