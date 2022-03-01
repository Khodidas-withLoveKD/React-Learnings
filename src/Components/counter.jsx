import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    count: 0,
    imageUrl: 'https://picsum.photos/200'
  }

  render() {
    return (
      <React.Fragment>
        <img src={this.state.imageUrl} alt="Hey there"/><br></br>
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