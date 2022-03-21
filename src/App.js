import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import CounterHome from './Pages/CounterHome'
import Home from './Pages/Home'
import Hooks from './Pages/Hooks/HooksHome'
import UseEffectHook from './Pages/Hooks/UseEffectHook'
import UseStateHook from './Pages/Hooks/UseStateHook'
import ColorCodeRetention from './Pages/WorkExperiments/ColorCodeRetention'
import WorkExperiments from './Pages/WorkExperiments/WorkExperiments'

import './App.css'
import FunctionalProgrammingInJS from './Pages/FunctionalProgrammingInJS'

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
					<Route path="/work-experiments" element={<WorkExperiments />} />
					<Route
						path="/work-experiments/color-code-retention"
						element={<ColorCodeRetention />}
					/>
					<Route
						path="/functional-programming-in-js"
						element={<FunctionalProgrammingInJS />}
					/>
				</Routes>
			</Router>
		</React.Fragment>
	)
}

export default App
