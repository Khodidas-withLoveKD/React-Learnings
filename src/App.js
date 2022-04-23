import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import {pathNames} from './Pages/Routes/homeRoutes' 
import { scrimbaCourseRoutes, hooksRoutes } from './Pages/Routes/InternalRoutes'
import CounterHome from './Pages/CounterHome'
import FunctionalProgrammingInJS from './Pages/FunctionalProgrammingInJS'
import Home from './Pages/Home'
import Hooks from './Pages/Hooks/HooksHome'
import UseEffectHook from './Pages/Hooks/UseEffectHook'
import UseRefHook from './Pages/Hooks/useRef'
import UseStateHook from './Pages/Hooks/UseStateHook'
import Redux from './Pages/Redux/ReduxHome'
import ColorCodeRetention from './Pages/WorkExperiments/ColorCodeRetention'
import WorkExperiments from './Pages/WorkExperiments/WorkExperiments'
import DigitalBusinessCard from './Pages/Scrimba Course/Project 1/DigitalBusinessCard'

import './App.css'

function App() {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/counters" element={<CounterHome />} />
					<Route path={pathNames.HOOKS} element={<Hooks />} />
					<Route path={hooksRoutes.USE_STATE_HOOK} element={<UseStateHook />} />
					<Route path={hooksRoutes.USE_EFFECT_HOOK} element={<UseEffectHook />} />
					<Route path={hooksRoutes.USE_REF_HOOK} element={<UseRefHook />} />
					<Route path="/work-experiments" element={<WorkExperiments />} />
					<Route
						path="/work-experiments/color-code-retention"
						element={<ColorCodeRetention />}
					/>
					<Route
						path="/functional-programming-in-js"
						element={<FunctionalProgrammingInJS />}
					/>
					<Route
						path="/redux"
						element={<Redux />}
					/>
					<Route
						path={scrimbaCourseRoutes.DIGITAL_BUSSINESS_CARD}
						element={<DigitalBusinessCard />}
					/>
				</Routes>
			</Router>
		</React.Fragment>
	)
}

export default App
