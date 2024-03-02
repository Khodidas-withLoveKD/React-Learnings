import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { allRoutes } from './Router/allRoutes'
import './App.css'

function App() {
	const router = createBrowserRouter(allRoutes)

	return <RouterProvider router={router} />
}

export default App
