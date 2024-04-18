import { useState, useEffect } from 'react'

const UseStateHook = () => {
	const [count, setCount] = useState(4)
	let [mutate, setMutate] = useState(0)
	console.log('kd mutate:', mutate)

	const decrementCount = () => {
		setCount((prevCount) => prevCount - 1)
	}

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1)
	}

	const stateUpdateCheck = () => {
		console.log('kd BEFORE UPDATE count:', count)
		setCount(count + 1)
		console.log('kd AFTER FIRST UPDATE count:', count)
		setCount(count + 1)
		console.log('kd AFTER SECOND UPDATE count:', count)
		setCount(count + 1)
		console.log('kd AFTER THIRD UPDATE count:', count)
		mutate = 1000
	}

	const stateUpdateCheckWithVar = () => {
		console.log('kd VAR BEFORE UPDATE count:', count)
		setCount((count) => count + 1)
		console.log('kd VAR AFTER FIRST UPDATE count:', count)
		setCount((count) => count + 1)
		console.log('kd VAR AFTER SECOND UPDATE count:', count)
		setCount((count) => count + 1)
		console.log('kd VAR AFTER THIRD UPDATE count:', count)
	}

	useEffect(() => {
		console.log('kd UE UPDATED count:', count)
	}, [count])

	useEffect(() => {
		console.log('kd UE UPDATED Mutate:', mutate)
	}, [mutate])

	return (
		<div>
			<button
				onClick={decrementCount}
				className="btn bg-secondary m-2 text-light"
			>
				-
			</button>
			<span>{count}</span>
			<button
				onClick={incrementCount}
				className="btn bg-secondary m-2 text-light"
			>
				+
			</button>
			<button
				onClick={stateUpdateCheck}
				className="btn bg-secondary m-2 text-light"
			>
				State Update
			</button>
			<button
				onClick={stateUpdateCheckWithVar}
				className="btn bg-secondary m-2 text-light"
			>
				State Update With Var
			</button>
			mutate = {mutate}
		</div>
	)
}

export default UseStateHook
