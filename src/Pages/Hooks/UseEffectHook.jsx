import React, { useEffect, useRef, useState } from 'react'

const UseEffectHook = () => {
	const [resourceType, setResourceType] = useState('posts')
	const [response, setResponse] = useState([])

	// useEffect test
	const someRef = useRef(null)
	console.log('kd RENDER TRIGGERED someRef:', someRef.current)

	useEffect(() => {
		console.log('kd USEFFECT someRef:', someRef.current)
	}, [someRef.current])

	useEffect(() => {
		setTimeout(() => {
			console.log('kd setting ref')
			someRef.current = 'Hey'
			console.log("kd ref setting done let's see if it triggers a render ")
		}, 5000)
	}, [])
	// CONCLUSION: setting of ref should not be done very simply. And useEffect and other such stuffs are
	// only called when a render occurs

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
			.then((response) => response.json())
			.then((json) => setResponse(json))

		// called during mount
		console.log('resource changed = ', resourceType)
		// called when unmount occurs
		return () => {
			console.log('return from resource change = ', resourceType)
		}
	}, [resourceType])

	return (
		<div>
			<button
				onClick={() => setResourceType('posts')}
				className="btn bg-secondary m-2 text-light"
			>
				Posts
			</button>
			<button
				onClick={() => setResourceType('users')}
				className="btn bg-secondary m-2 text-light"
			>
				Users
			</button>
			<button
				onClick={() => setResourceType('comments')}
				className="btn bg-secondary m-2 text-light"
			>
				Comments
			</button>
			<h2>{resourceType}</h2>
			{response.map((resp) => {
				return <pre>{JSON.stringify(resp)}</pre>
			})}
		</div>
	)
}

export default UseEffectHook
