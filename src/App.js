import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import CounterHome from './Pages/CounterHome'
import Home from './Pages/Home'
import Hooks from './Pages/Hooks/HooksHome'
import UseEffectHook from './Pages/Hooks/UseEffectHook'
import UseStateHook from './Pages/Hooks/UseStateHook'

import './App.css'

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/counters" element={<CounterHome />} />
					<Route path="/hooks" element={<Hooks />} />
					<Route path="/hooks/use-state-hook" element={<UseStateHook />} />
					<Route path="/hooks/use-effect-hook" element={<UseEffectHook />} />
				</Routes>
			</Router>
		</React.Fragment>
	)
}

export default App
