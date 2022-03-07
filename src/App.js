import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Counter from './Components/counter'
import Counters from './Components/counters'
import Home from './Components/Home'

import './App.css'

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/counter" element={<Counter />} />
					<Route path="/counters" element={<Counters />} />
				</Routes>
			</Router>
		</React.Fragment>
	)
}

export default App
