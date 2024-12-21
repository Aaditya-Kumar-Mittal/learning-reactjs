import React, { Component } from "react";

class ReactHookUseEffectClass1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    // Set the initial document title
    document.title = `Clicked ${this.state.count} times`;
  }

  componentDidUpdate(prevProps, prevState) {
    // Update the document title only if count changes
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `Clicked ${this.state.count} times`;
    }
  }

  render() {
    return (
      <div>
        {/* Input field to update the name */}
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => {
            this.setState({ name: e.target.value });
          }}
        />
        {/* Button to increment the count */}
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ReactHookUseEffectClass1;
