import React, { Component } from "react";
import { UserConsumer } from "./ReactContextUserContext";

class ReactContextComponentF extends Component {
  render() {
    return (
      <div>
        <h1>Component F</h1>
        <UserConsumer>
          {(username) => {
            return <div>Hello, {username}!</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default ReactContextComponentF;
