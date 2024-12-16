import React, { Component } from "react";

class ReactRenderCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        {this.props.render(this.state.count, this.incrementCount)}
        {/* Take the count and incrementCount method and render whatever you want to  */}
      </div>
    );
  }
}

export default ReactRenderCounter;
