import React from 'react'

import Counter from './counter'

class Counters extends React.Component {
	render() {
		return (
			<React.Fragment>
				<button
					onClick={this.props.onReset}
					className="btn btn-primary btn-sm m-2"
				>
					Reset
				</button>
				{this.props.counters.map((counter) => (
					<Counter
						key={counter.id}
						onDelete={() => this.props.onDelete(counter.id)}
						onIncrement={() => this.props.onIncrement(counter)}
						counter={counter}
					/>
				))}
			</React.Fragment>
		)
	}
}

export default Counters
