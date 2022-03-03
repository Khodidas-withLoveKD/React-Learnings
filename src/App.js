import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Counter from './Components/counter'
import Home from './Components/Home'
import RouterTest from './Components/RouterTest'

import './App.css'

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/counter" element={<Counter />} />
					<Route path="/router-test" element={<RouterTest />} />
				</Routes>
			</Router>
		</React.Fragment>
	)
}

export default App
