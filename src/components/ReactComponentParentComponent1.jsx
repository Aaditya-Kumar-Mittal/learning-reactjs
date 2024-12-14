import React, { Component } from "react";
import ReactComponentRegularComponents1 from "./ReactComponentRegularComponents1";
import ReactComponentPureComponent1 from "./ReactComponentPureComponent1";

class ReactComponentParentComponent1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Aaditya",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Aaditya",
      });
    }, 2000);
  }

  render() {
    console.log('*********************Parent Component******************************');
    
    return (
      <div>
        <h1>Parent Component</h1>
        <ReactComponentRegularComponents1 name={this.state.name} />
        <ReactComponentPureComponent1 name={this.state.name} />

      </div>
    );
  }
}

export default ReactComponentParentComponent1;
