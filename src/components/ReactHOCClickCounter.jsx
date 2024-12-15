import React, { Component } from "react";

class ReactHOCClickCounter extends Component {
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
    const { count } = this.state;

    return (
      <div>
        <button onClick={this.incrementCount}>
          <h1>Clicked {count} Times</h1>
        </button>
      </div>
    );
  }
}

export default ReactHOCClickCounter;
