import React from 'react'

import Counter from './counter'

class Counters extends React.Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 1 },
			{ id: 3, value: 2 },
			{ id: 4, value: 3 },
		],
	}
	deleteCounter() {
		console.log('Counter deleted')
	}
	render() {
		return (
			<React.Fragment>
				{this.state.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={this.deleteCounter}
						value={counter.value}
						id={counter.id}
					/>
				))}
			</React.Fragment>
		)
	}
}

export default Counters
