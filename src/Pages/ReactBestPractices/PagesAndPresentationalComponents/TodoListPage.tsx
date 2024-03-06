import { useEffect, useState } from 'react'

interface ITodo {
	userId: number
	id: number
	title: string
	completed: boolean
}

const TodoListPage = () => {
	// some api calls and managing of state

	// first try without component thing
	const [todos, setTodos] = useState<Array<ITodo>>([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((response) => response.json())
			.then((json) => {
				console.log(json)
			})
	}, [])

	return <>ToodLists</>
}

export default TodoListPage
