import React from "react";

export default class Counter extends React.Component {
    state = { counter: 0};
    increment = () => {
        this.setState({
            counter: this.state.counter + 1 
        })
    };
    decrement = () => {
        this.setState ({
            counter: this.state.counter - 1
        })
    }
  render() {
    return <div>
        Counter: {this.state.counter}
        <br/><br/>
        <button onClick={this.increment}>plus+</button>
        <button onClick={this.decrement}>moins-</button>
    </div>;
  }
}
