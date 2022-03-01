import React, { Component } from 'react';

class Counter extends React.Component {
  state = {
    count: 0
  };
  
  styles = {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  };

  render() {
    return (
      <React.Fragment>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button style = {{ fontSize: 30, fontWeight: 'bolder' }} className="btn btn-warning btn-sm">
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += (this.state.count === 0) ? 'warning' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state
    return count === 0 ? 'Zero' : count
  }
}
 
export default Counter;