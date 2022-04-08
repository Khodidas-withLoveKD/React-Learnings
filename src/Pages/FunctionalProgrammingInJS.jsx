import { Map } from 'immutable'
import { compose, pipe } from 'lodash/fp'
import React from 'react'

const FunctionalProgrammingInJS = () => {
	let input = '  JAvaScrIpT   '

	const trim = str => str.trim()
	const toLowerCase = str => str.toLowerCase()
	const wrapInDiv = str => `<div>${str}</div>`
	const wrapInSpan = str => `<span>${str}</span>`
	// below won't work so currying it
	const wrap = (type, str) => `<${type}>${str}</${type}>`
	const curriedWrap = type => str => `<${type}>${str}</${type}>`
	/*
	same as 
	function add(a) {
		return function add(b) {
			return a + b
		}
	}
	*/
	console.log(curriedWrap('span')('KDDDDDD'))
	// const result = wrapInDiv(toLowerCase(trim(input)))
	// const transform = compose(wrapInDiv, toLowerCase, trim)
	const transform = pipe(trim, toLowerCase, curriedWrap('kd'))
	const result = transform(input)

	// Mutating objects
	const person = {name: 'KD', address: {city: 'Surat'}}
	const updatedPerson = Object.assign({}, person, {age: 30})
	const usingSpread = {...updatedPerson, name: 'KKKK', height: 45}
	// console.log(`person = ${JSON.stringify(person)} | updated = ${JSON.stringify(updatedPerson)} | usingSpread = ${JSON.stringify(usingSpread)}`)
	usingSpread.address.city = "KDKDKDK"
	// console.log(`LATER \n person = ${JSON.stringify(person)} | updated = ${JSON.stringify(updatedPerson)} | usingSpread = ${JSON.stringify(usingSpread)}`)
	const newObj = {
		...person,
		address: {
			...person.address,
			city: 'AHMD'
		}
	}
	newObj.address.city = 'DElhi'
	// console.log(`AGIAN \n person = ${JSON.stringify(person)} | updated = ${JSON.stringify(updatedPerson)} | usingSpread = ${JSON.stringify(usingSpread)} | newObj = ${JSON.stringify(newObj)}`)
	
	// ------- Using Immutable ------------
	const book = Map({title: 'Harry Potter'})

	console.log('book = ', book['title'])
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
	