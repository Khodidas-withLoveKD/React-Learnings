import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { allRoutes } from './Router/Router'
import './App.css'

function App() {
	const router = createBrowserRouter(allRoutes)

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

export default App
