import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class LifecycleExample extends Component {
  // Step 1: Initialize state in the constructor
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  // Step 2: Component lifecycle method - componentDidMount
 componentDidMount() {
    console.log('Component did mount');
    // Example: Making an API call or setting up subscriptions
  }
  // Step 3: Component lifecycle method - componentDidUpdate
  componentDidUpdate(prevState) {
    console.log('Component did update', prevState, this.state);
    // Example: Compare previous state and perform necessary actions
  }
  // Step 4: Component lifecycle method - componentWillUnmount
  componentWillUnmount() {
    console.log('Component will unmount');
    // Example: Cleanup tasks, cancel network requests, clear up resources
  }
  // Step 5: Update state using setState method
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  // Step 6: Render method to display component UI
  render() {
    console.log('Render method');
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.incrementCount}>Increment</button>
      </div>
    );
  }
}
// Render the component
ReactDOM.render(<LifecycleExample />, document.getElementById('root'));