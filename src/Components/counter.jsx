import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  };
  styles = {
    fontSize: 20,
    fontWeight: 'bold'
  };
  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className="badge bg-primary m-2">
          {this.formatCount()}
        </span>
        <button style = {{ fontSize: 30, fontWeight: 'bolder' }} className="btn btn-warning btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }
}
 
export default Counter;