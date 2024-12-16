import React, { Component } from "react";
import UpdatedComponent from "./ReactHOCWithCounter";
class ReactHOCHoverCounterNew extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOutCapture={incrementCount}>Hovered {count} Times</h1>
        <br />
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default UpdatedComponent(ReactHOCHoverCounterNew);
