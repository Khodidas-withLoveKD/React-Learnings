import React, { useState } from 'react'

const UseStateHook = () => {
	const [count, setCount] = useState(4)

	const decrementCount = () => {
		setCount((prevCount) => prevCount - 1)
	}
	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1)
	}
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
		</div>
	)
}

export default UseStateHook
