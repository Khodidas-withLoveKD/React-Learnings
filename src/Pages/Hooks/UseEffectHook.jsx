import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
	const [resourceType, setResourceType] = useState('posts')
	const [response, setResponse] = useState([])

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
