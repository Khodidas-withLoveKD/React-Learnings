class Calculator {
	currentValue = 0

	constructor(initialValue = 0) {
		// console.log(
		// 	`plus = ${this.plus} | minus = ${this.minus} | value = ${this.value}`
		// )
		// console.log('CONStructor this = ', this)
		this.currentValue = initialValue
	}

	plus(value) {
		this.currentValue += value
		return this
	}

	minus(value) {
		this.currentValue -= value
		return this
	}

	value() {
		return this.currentValue
	}
}

function plus(val) {
	return new Calculator().plus(val)
}

function minus(val) {
	return new Calculator().minus(val)
}

function evaluate(cond) {
	switch (cond) {
		case 1:
			return plus(2).plus(3).value() // should return 5
		case 2:
			return plus(3).minus(2).value() // should return 1
		case 3:
			return plus(2).minus(3).value() // should return -1
		case 4:
			return plus(2).plus(3).plus(4).minus(1).minus(3).value() // should return 5
		default:
			return 0
	}
}

// start
console.log(evaluate(1)) // 5
console.log(evaluate(2)) // 1
console.log(evaluate(3)) // -1
console.log(evaluate(4)) // 5
