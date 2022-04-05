import React from 'react'

const FunctionalProgrammingInJS = () => {
	let input = '  JAvaScrIpT   '

	const trim = str => str.trim()
	const toLowerCase = str => str.toLowerCase()
	const wrapInDiv = str => `<lofa>${str}</div>`
	const result = wrapInDiv(toLowerCase(trim(input)))
	return (<React.Fragment>{result}</React.Fragment>)
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
	