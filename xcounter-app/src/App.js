import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </>
    );
  }
}

export default App;