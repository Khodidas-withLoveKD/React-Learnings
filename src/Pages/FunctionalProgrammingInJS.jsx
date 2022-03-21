import React from 'react'

class FunctionalProgrammingInJS extends React.Component {
	sayHello() {
		return 'Hello World'
	}
	// passinga as reference
	fn = this.sayHello
	//passing return value
	fnResult = this.sayHello()
	// passing it as another function
	sayItAgain() {
		return this.sayHello()
	}
	render() {
		console.log(`fn = ${this.fn}`)
		console.log(`fnResult = ${this.fnResult}`)
		console.log(`Reference again = ${this.sayItAgain}`)
		console.log(`again = ${this.sayItAgain()}`)
		return <div></div>
	}
}

export default FunctionalProgrammingInJS
