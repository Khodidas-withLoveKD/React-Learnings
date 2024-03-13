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
