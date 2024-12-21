import React, { Component } from "react";

class ReactHookUseEffectClass2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e) => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>
          X - {this.state.x} Y - {this.state.y}
        </h1>
      </div>
    );
  }
}

export default ReactHookUseEffectClass2;
