import { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
	const [count, updateCount] = useState(0)
	const refCount = useRef(0)

	console.log('Render')
	useEffect(() => {
		updateCount(() => count + 1)
		console.log('Useffect')
		refCount.current = refCount.current + 1
	}, [])
	console.log(`count = ${count} | refCount = ${refCount.current}`)
	return (
		<div className="App">
			<span>Count = {count}</span>
			<br></br>
			<span>refCountt = {refCount.current}</span>
			<br></br>
		</div>
	)
}

export default UseRefHook
