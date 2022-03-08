import React, { Component } from 'react'

class Counter extends React.Component {
	styles = {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
	}
	render() {
		return (
			<div>
				<span style={this.styles} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					style={{ fontSize: 20, fontWeight: 'bolder' }}
					className="btn btn-warning btn-sm"
					onClick={() => this.props.onIncrement(this.props.counter)}
				>
					Increment
				</button>
				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="button btn btn-danger btn-sm m-2"
				>
					Delete
				</button>
			</div>
		)
	}
	getBadgeClasses() {
		let classes = 'badge m-2 bg-'
		classes += this.props.counter.value === 0 ? 'warning' : 'primary'
		return classes
	}

	formatCount() {
		const { value: count } = this.props.counter
		return count === 0 ? 'Zero' : count
	}
}

export default Counter
