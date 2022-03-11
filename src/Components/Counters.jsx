import React from 'react'

import Counter from './counter'

class Counters extends React.Component {
	render() {
		const { onReset, onDelete, onIncrement, counters } = this.props
		return (
			<React.Fragment>
				<button onClick={onReset} className="btn btn-primary btn-sm m-2">
					Reset
				</button>
				{counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={() => onDelete(counter.id)}
						onIncrement={() => onIncrement(counter)}
						counter={counter}
					/>
				))}
			</React.Fragment>
		)
	}
}

export default Counters
