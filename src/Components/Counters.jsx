import React from 'react'

import Counter from './counter'

class Counters extends React.Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 1 },
			{ id: 4, value: 3 },
		],
	}
	resetCounters = () => {
		console.log('Resetting counter')
		const counters = this.state.counters.map((counter) => {
			counter.value = 0
			return counter
		})
		this.setState({ counters })
	}
	deleteCounter = (counterId) => {
		console.log('Counter deleted with ID = ', counterId)
		const counters = this.state.counters.filter((c) => c.id !== counterId)
		this.setState({ counters })
	}
	render() {
		return (
			<React.Fragment>
				<button
					onClick={this.resetCounters}
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={this.deleteCounter}
						counter={counter}
					/>
				))}
			</React.Fragment>
		)
	}
}

export default Counters
