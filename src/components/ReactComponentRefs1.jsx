import React, { Component } from "react";

class ReactComponentRefs1 extends Component {
  constructor(props) {
    super(props);

    // Create a reference
    this.inputRef = React.createRef();

    // Bind the handleClick method to the class instance
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // Focus the input field when the component mounts
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  handleClick() {
    // Alert the current value of the input field
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <br />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default ReactComponentRefs1;
