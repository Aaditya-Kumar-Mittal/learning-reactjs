import React, { PureComponent } from "react";

export class ReactComponentPureComponent1 extends PureComponent {
  render() {
    console.log("++++++++++++++++++ Pure Component ++++++++++++");

    return (
      <div>
        <h1>React Pure Component {this.props.name}</h1>
      </div>
    );
  }
}

export default ReactComponentPureComponent1;
