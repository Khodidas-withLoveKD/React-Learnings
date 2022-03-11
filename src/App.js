import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import CounterHome from './Pages/CounterHome'
import Home from './Pages/Home'
import Hooks from './Pages/Hooks/HooksHome'
import UseState from './Pages/Hooks/UseState'

import './App.css'

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/counters" element={<CounterHome />} />
					<Route path="/hooks" element={<Hooks />} />
					<Route path="/hooks/use-state" element={<UseState />} />
				</Routes>
			</Router>
		</React.Fragment>
	)
}

export default App
