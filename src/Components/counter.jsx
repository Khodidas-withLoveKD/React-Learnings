import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  }

  render() {
    return (
      <React.Fragment>
        <span>count = {this.state.count}</span><br></br>
        <span>count = {this.formatCount()}</span><br></br>
        <span>2 + 2 = {2 + 2}</span><br></br>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state
    const headingZero = <h1>Zero</h1>
    return count === 0 ? headingZero : count
  }
}
 
export default Counter;