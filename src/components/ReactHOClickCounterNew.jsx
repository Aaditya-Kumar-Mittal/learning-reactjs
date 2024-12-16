import React, { Component } from "react";
import UpdatedComponent from "./ReactHOCWithCounter";
class ReactHOClickCounterNew extends Component {
  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <button onClick={incrementCount}>
          <h1>Clicked {count} Times</h1>
          <br />
          <h1>{this.props.name}</h1>
        </button>
      </div>
    );
  }
}

export default UpdatedComponent(ReactHOClickCounterNew);
