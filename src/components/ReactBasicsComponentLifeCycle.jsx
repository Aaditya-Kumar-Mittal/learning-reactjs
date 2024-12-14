import React from 'react'

class ReactBasicsComponentLifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("🔵 constructor: Component is being created.");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("🔵/🟢 getDerivedStateFromProps: Sync state with props if needed.");
    return null; // No state changes
  }

  componentDidMount() {
    console.log("🔵 componentDidMount: Component added to the DOM.");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("🟢 shouldComponentUpdate: Decide if component should re-render.");
    return true; // Allow re-render
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("🟢 getSnapshotBeforeUpdate: Capture snapshot before DOM updates.");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("🟢 componentDidUpdate: Component updated in the DOM.");
  }

  componentWillUnmount() {
    console.log("🟣 componentWillUnmount: Component is being removed from the DOM.");
  }

  static getDerivedStateFromError(error) {
    console.log("🔴 getDerivedStateFromError: Update state after an error.");
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("🔴 componentDidCatch: Log error details.", error, info);
  }

  render() {
    console.log("🔵/🟢 render: Component is rendering.");
    return (
      <div>
        <h1>React Lifecycle Methods</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment Count
        </button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ReactBasicsComponentLifeCycle;