import React, { Component } from 'react'

class Counter extends React.Component {
	state = {
		value: this.props.value,
		tags: ['tag1', 'tag2', 'tag3'],
	}

	styles = {
		fontSize: 20,
		fontWeight: 'bold',
		color: 'black',
	}

	render() {
		console.log(this.props)
		return (
			<div>
				{this.props.children}
				<span style={this.styles} className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					style={{ fontSize: 20, fontWeight: 'bolder' }}
					className="btn btn-warning btn-sm"
					onClick={() => this.handleIncrement({ count: 1 })}
				>
					Increment
				</button>
				{/* <div>
					{this.state.tags.length === 0 && 'Please create a new tag!!'}
					{this.renderTags()}
				</div> */}
			</div>
		)
	}

	handleIncrement = (product) => {
		this.setState({ value: this.state.value + 1 })
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
		classes += this.state.value === 0 ? 'warning' : 'primary'
		return classes
	}

	formatCount() {
		const { value: count } = this.state
		return count === 0 ? 'Zero' : count
	}
}

export default Counter
