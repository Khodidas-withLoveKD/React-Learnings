const reg = function () {
	console.log('regular this = ', this)
	return 'Regular Functio'
}

const arr = () => {
	console.log('arr this = ', this)
}

reg()
arr()

class Person {
	constructor(name) {
		this.name = name
		this.reg = reg

		console.log('person this = ', this)
		console.log('person this.reg = ', this.reg())
		console.log('reg() = ', reg())
	}
}

new Person('KD')
