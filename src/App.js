import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import CounterHome from './Components/counterHome'
import Home from './Components/Home'

import './App.css'

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/counters" element={<CounterHome />} />
				</Routes>
			</Router>
		</React.Fragment>
	)
}

export default App
