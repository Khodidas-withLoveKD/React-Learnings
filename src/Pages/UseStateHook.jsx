import React, { useState } from 'react'

const useStateHook = () => {
	const [count, setCount] = useState(4)

	const decrementCount = () => {
		setCount((prevCount) => prevCount - 1)
		setCount((prevCount) => prevCount - 1)
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
			<button className="btn bg-secondary m-2 text-light">+</button>
		</div>
	)
}

export default useStateHook
