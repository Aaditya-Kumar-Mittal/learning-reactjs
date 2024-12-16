import React, { Component } from "react";

class ReactRenderUser extends Component {
  render() {
    return (
      <div>
        <h1>React Render Props Demo</h1>
        <br />
        <h4>{this.props.render()}</h4>
      </div>
    );
  }
}

export default ReactRenderUser;
