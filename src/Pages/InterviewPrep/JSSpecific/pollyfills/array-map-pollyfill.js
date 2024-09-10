/*
So the map function looks like this
Array.map(x => x*2)
Array.map(cb(val, i, arr) => [])
*/

Array.prototype.myMap = function (cb) {
	// iterate through each element and give back the modified element
	// finally return the new array
	const temp = []

	for (let i = 0; i < this.length; i++) {
		temp.push(cb(this[i], i, this))
	}

	return temp
}

const nums = [1, 2, 3]

console.log('----- SINGLE ARG implementation ------')
// uses only arr[i]
const multiplyCb = (x) => x * 2
let arr = nums.map((x) => x * 2)
let myArr = nums.myMap((x) => x * 2)
console.log('arr:', ...arr)
console.log('myArr:', ...myArr)

console.log('----- TWO ARG implementation ------')
// uses arr[i] and i
const multiplyCbWithTwoArgs = (x, i) => x * i
arr = nums.map(multiplyCbWithTwoArgs)
myArr = nums.myMap(multiplyCbWithTwoArgs)
console.log('arr:', ...arr)
console.log('myArr:', ...myArr)

console.log('----- THREE ARG implementation ------')
// uses arr[i], i and arr as well
const multiplyCbWithThreeArgs = (x, i, arr) => x * i * arr.length
arr = nums.map(multiplyCbWithThreeArgs)
myArr = nums.myMap(multiplyCbWithThreeArgs)
console.log('arr:', ...arr)
console.log('myArr:', ...myArr)
