/*
A fancy term used in react where we pass a function -- which will render the data given to it -- as a prop

For our example, we will take:
1. FetcherComponent which will fetch API data
2. GridView Component which render the data in grid view
3. ListView Component which will render the data in list view
*/

import { useState } from 'react'
import Fetcher from './Fetcher'
import ListView from './ListView'
import GridView from './GridView'

const RenderProp = () => {
	const [isListView, setIsListView] = useState<boolean>(true)

	return (
		<>
			<button onClick={() => setIsListView((isListView) => !isListView)}>
				Toggle View
			</button>
			{isListView ? (
				<Fetcher render={(users) => <ListView users={users} />} />
			) : (
				<Fetcher render={(users) => <GridView users={users} />} />
			)}
		</>
	)
}

export default RenderProp
