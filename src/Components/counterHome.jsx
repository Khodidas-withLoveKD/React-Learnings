import React from 'react'

import Counters from './counters'
import NavBar from './navbar'

class CounterHome extends React.Component {
	state = {
		counters: [
			{ id: 1, value: 0 },
			{ id: 2, value: 0 },
			{ id: 3, value: 1 },
			{ id: 4, value: 3 },
		],
		counterValue: 0,
	}
	constructor() {
		super()
		console.log('constructor')
		// count it initially
		let counterVal = 0
		this.state.counters.forEach((counter) => {
			counterVal += counter.value
		})
		console.log('CounterVal = ', counterVal)
		this.setState({ counterValue: counterVal })
		console.log('counterVALUE = ', this.state.counterValue)
	}
	resetCounters = () => {
		console.log('Resetting counter')
		const counters = this.state.counters.map((counter) => {
			counter.value = 0
			return counter
		})
		this.setState({ counters })
		this.setState({ counterValue: 0 })
	}
	deleteCounter = (counterId) => {
		console.log('Counter deleted with ID = ', counterId)
		const counters = this.state.counters.filter((c) => c.id !== counterId)
		this.setState({ counters })
	}
	incrementCounter = (counter) => {
		const counters = [...this.state.counters]
		const index = counters.indexOf(counter)
		counters[index].value++
		this.setState({ counters })
		this.setState({ counterValue: this.state.counterValue + 1 })
	}
	render() {
		return (
			<div>
				<NavBar counterValue={this.state.counterValue} />
				<Counters
					counters={this.state.counters}
					onReset={this.resetCounters}
					onIncrement={this.incrementCounter}
					onDelete={this.deleteCounter}
				/>
			</div>
		)
	}
}

export default CounterHome
