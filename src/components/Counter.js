import React from "react";
import { connect } from 'react-redux'

class Counter extends React.Component {

  render() {
    return <div>
        Counter: {this.state.counter}
        <br/><br/>
        <button onClick={this.increment}>plus+</button>
        <button onClick={this.decrement}>moins-</button>
    </div>;
  }
}
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
}
export default connect (mapStateToProps)(Counter)

// export default class Counter extends React.Component {
//     state = { counter: 0};
//     increment = () => {
//         this.setState({
//             counter: this.state.counter + 1 
//         })
//     };
//     decrement = () => {
//         this.setState ({
//             counter: this.state.counter - 1
//         })
//     }
//   render() {
//     return <div>
//         Counter: {this.state.counter}
//         <br/><br/>
//         <button onClick={this.increment}>plus+</button>
//         <button onClick={this.decrement}>moins-</button>
//     </div>;
//   }
// }
