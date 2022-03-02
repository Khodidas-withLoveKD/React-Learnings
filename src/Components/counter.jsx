import React, { Component } from 'react'

class Counter extends React.Component {
	state = {
		count: 0,
		tags: ['tag1', 'tag2', 'tag3'],
	}

	styles = {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
	}

	render() {
		return (
			<React.Fragment>
				<span style={this.styles} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					style={{ fontSize: 30, fontWeight: 'bolder' }}
					className="btn btn-warning btn-sm"
					onClick={this.handleIncrement}
				>
					Increment
				</button>
				<div>
					{this.state.tags.length === 0 && 'Please create a new tag!!'}
					{this.renderTags()}
				</div>
			</React.Fragment>
		)
	}

	handleIncrement() {
		console.log('Increment clicked | count = ', this)
	}

	renderTags() {
		if (this.state.tags.length)
			return (
				<ul>
					{this.state.tags.map((tag) => (
						<li key={tag}>{tag}</li>
					))}
				</ul>
			)

		return <p>There are no tags babes!!</p>
	}

	getBadgeClasses() {
		let classes = 'badge m-2 bg-'
		classes += this.state.count === 0 ? 'warning' : 'primary'
		return classes
	}

	formatCount() {
		const { count } = this.state
		return count === 0 ? 'Zero' : count
	}
}

export default Counter
