import { useState, useEffect } from 'react'
import { IObjProps } from 'shared/interfaces'

const Fetcher = ({
	render,
}: {
	render: (users: Array<IObjProps>) => JSX.Element
}) => {
	const [users, setUsers] = useState<Array<IObjProps>>([])

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((resp) => resp.json())
			.then((resp) => setUsers(resp))
	}, [])

	// now the fetched data has to be passed to component which will render this data
	return render(users)
}

export default Fetcher
