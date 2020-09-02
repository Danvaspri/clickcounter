import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const handleDisplayState = (counter, msg) => {
  if (msg) return msg;
  else {
    return 'the current state is :' + counter;
  }
};
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      msg: '',
    };
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }
  handleIncrement() {
    this.setState({ counter: this.state.counter + 1, msg: '' });
  }
  handleDecrement() {
    if (this.state.counter == 0) {
      console.log(this.state.counter);
      return this.setState({ msg: "can't go below 0" });
    } else {
      return this.setState({ counter: this.state.counter - 1 });
    }
  }

  render() {
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">
          {handleDisplayState(this.state.counter, this.state.msg)}
        </h1>
        <button data-test="increment-button" onClick={this.handleIncrement}>
          Increase
        </button>
        <button data-test="decrement-button" onClick={this.handleDecrement}>
          Decrease
        </button>
      </div>
    );
  }
}

export default App;
