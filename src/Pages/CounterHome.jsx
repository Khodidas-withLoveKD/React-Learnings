import React from 'react'

import Counters from '../Components/CounterTutorial/Counters'
import NavBar from '../Components/CounterTutorial/NavBar'

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
		console.log('App - constructor')
	}
	componentDidMount() {
		console.log('App - Mounted')
		this.getTotalQuantityOfItems()
		console.log('MOUNT counterVALUE = ', this.state.counterValue)
		console.log('NOtice the value of counterValue is still nothing')
	}
	componentDidUpdate(prevProps, prevState) {
		console.log('prevState:', prevState)
		console.log('currState:', this.state)
		console.log('App - updated')
	}
	getTotalQuantityOfItems() {
		let counterVal = 0
		this.state.counters.forEach((counter) => {
			counterVal += counter.value
		})
		console.log('CounterVal = ', counterVal)
		this.setState({ counterValue: counterVal })
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
		this.setState({ counters }, () => {
			console.log('Delete counters callback = ', this.state.counters)
			this.getTotalQuantityOfItems()
		})
		console.log('DELETE counters = ', this.state.counters)
	}

	incrementCounter = (counter) => {
		const counters = [...this.state.counters]
		const index = counters.indexOf(counter)
		counters[index].value++
		this.setState({ counters })
		this.setState({ counterValue: this.state.counterValue + 1 })
	}

	render() {
		console.log('App - rendered')
		return (
			<div>
				<NavBar
					totalQuantity={this.state.counterValue}
					totalItems={this.state.counters.filter((c) => c.value > 0).length}
				/>
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
