import React from 'react'
import {compose, pipe} from 'lodash/fp'
const FunctionalProgrammingInJS = () => {
	let input = '  JAvaScrIpT   '

	const trim = str => str.trim()
	const toLowerCase = str => str.toLowerCase()
	const wrapInDiv = str => `<div>${str}</div>`
	// const result = wrapInDiv(toLowerCase(trim(input)))
	// const transform = compose(wrapInDiv, toLowerCase, trim)
	const transform = pipe(trim, toLowerCase, wrapInDiv)
	const result = transform(input)
	return (<div>{result}</div>)
}

export default FunctionalProgrammingInJS

// class FunctionalProgrammingInJS extends React.Component {
	// 	// sayHello() {
	// 	// 	return 'Hello World'
	// 	// }
	// 	// // passinga as reference
	// 	// fn = this.sayHello
	// 	// //passing return value
	// 	// fnResult = this.sayHello()
	// 	// // passing it as another function
	// 	// sayItAgain() {
	// 	// 	return this.sayHello()
	// 	// 	// OR
	// 	// 	// return function () {
	// 	// 	//   console.log('Hello World')
	// 	// 	// }
	// 	// }
	// 	input = '  JAvaScrIpT   '
	
	// 	trim = str => str.trim()
	// 	toLowerCase = str => str.toLowerCase()
	// 	wrapInDiv = str => `<div>${str}</div>`
	// 	result = wrapInDiv(toLowerCase(trim(input)))
	// 	render() {
	// 		// console.log(`fn = ${this.fn}`)
	// 		// console.log(`fnResult = ${this.fnResult}`)
	// 		// console.log(`Reference again = ${this.sayItAgain}`)
	// 		// console.log(`again = ${this.sayItAgain()}`)
	// 		return <div>{this.result}</div>
	// 	}
	// }
	