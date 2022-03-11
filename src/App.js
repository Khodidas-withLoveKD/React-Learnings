import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import CounterHome from './Pages/CounterHome'
import Home from './Pages/Home'
import UseStateHook from './Pages/UseStateHook'

import './App.css'

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/counters" element={<CounterHome />} />
					<Route path="/usestate-hook" element={<UseStateHook />} />
				</Routes>
			</Router>
		</React.Fragment>
	)
}

export default App
