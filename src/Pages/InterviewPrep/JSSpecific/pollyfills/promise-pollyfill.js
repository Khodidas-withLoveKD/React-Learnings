/*
A normal promise looks like this
myPromise = new Promise((resolve, reject) => resolve('Success')).then(doThingAfterResolve)
            .catch(doThingIfFailure).finally(doItAnyways)

Things need to implement
1. A promise class (will do it with normal functions as well)
2. reject, resolve functions
3. chaining of then, catch and finally
*/

class PromisePolyfill {
	constructor(executor) {
		console.log('kd executor:', executor())
		this.executor = executor
	}

	// onResolve()

	resolve(val) {
		console.log('val = ', val)
	}

	then(callbackFn) {}
}

const myPromise = new PromisePolyfill((resolve, reject) =>
	// setTimeout(resolve('KD'), 2000)
	resolve('adfs')
)
