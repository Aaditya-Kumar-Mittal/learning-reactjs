import React, { Component } from "react";

export class ReactComponentRegularComponents1 extends Component {
  render() {
    console.log('--------------------Regular Class Component---------------------');
    
    return (
      <div>
        <h1>Regular Class Component {this.props.name}</h1>
      </div>
    );
  }
}

export default ReactComponentRegularComponents1;
