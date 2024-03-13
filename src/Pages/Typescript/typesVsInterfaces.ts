type funcDeclaration = (num: number, num2: string) => number
interface IFuncDeclaration {
	(num: number, num2: string): number
}

const f1: funcDeclaration = (num, someString) => 10
const f2: IFuncDeclaration = (num, somestirng): number => 10

type newNum2 = number
interface INewNum2 {
	number: number
}

const n1: newNum2 = 10
const n2: INewNum2 = { number: 10 }

// export const homePageRoutes: Arr
type newNum = number
interface INewNum {
	num: number
}

const a: newNum = 10
const b: INewNum = { num: 10 }

// how the types can be extended and use
type Engine = 'EV' | 'ICE'
type FillPetrol = (litres: number, capacity: number) => void
type Charge = (batterySize: number) => void
type RefillHandler<A extends Engine> = A extends 'EV' ? Charge : FillPetrol

const refillToyota: RefillHandler<'ICE'> = (fuelToBeFilled, capacityOfTank) => {
	console.log('kd capacityOfTank:', capacityOfTank)
	console.log('kd fuelToBeFilled:', fuelToBeFilled)
	// some implementation
}

const chargeTesla: RefillHandler<'EV'> = (batteryUnits) => {
	console.log('kd batteryUnits:', batteryUnits)
}

console.log('toyota = ', refillToyota(10, 12))
console.log('Tesla = ', chargeTesla(10))

// TODO: to implement, complex type (done above), mapped, condtional types and extending
// implementation of classes
interface Animal {
	name: string
	makeSound: VoidFunction
}

class Dog implements Animal {
	name: string

	constructor(name: string) {
		this.name = name
	}

	makeSound() {
		console.log(`${this.name} barks`)
	}
}

const dog = new Dog('Battu')
dog.makeSound()

// interface extending and implementing
interface Shape {
	area: () => number
}

interface Rectangle extends Shape {
	height: number
	width: number
}

class ReactangleImpl implements Rectangle {
	height: number
	width: number

	constructor(height: number, width: number) {
		this.height = height
		this.width = width
	}

	area() {
		return this.height * this.width
	}
}

const rectangle = new ReactangleImpl(10, 10)
console.log(`Area = ${rectangle.area()}`)
