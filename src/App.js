import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import CounterHome from './Pages/CounterHome'
import FunctionalProgrammingInJS from './Pages/FunctionalProgrammingInJS'
import Home from './Pages/Home'
import Hooks from './Pages/Hooks/HooksHome'
import UseEffectHook from './Pages/Hooks/UseEffectHook'
import UseRefHook from './Pages/Hooks/useRef'
import UseStateHook from './Pages/Hooks/UseStateHook'
import InterviewTest from './Pages/InterviewTest/InterviewTestHomePage'
import Redux from './Pages/Redux/ReduxHome'
import { pathNames } from './Pages/Routes/homeRoutes'
import { hooksRoutes, scrimbaCourseRoutes, workExperimentRoutes } from './Pages/Routes/InternalRoutes'
import DigitalBusinessCard from './Pages/ScrimbaCourse/DigitalBusinessCard/DigitalBusinessCard'
import ColorCodeRetention from './Pages/WorkExperiments/ColorCodeRetention'
import WorkExperiments from './Pages/WorkExperiments/WorkExperiments'

import './App.css'
import XlsxCsvEditor from './Pages/WorkExperiments/XlsxCsvEditor/XlsxCsvEditor'

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
					<Route path={pathNames.WORK_EXPERIMENTS} element={<WorkExperiments />} />
					<Route
						path={workExperimentRoutes.COLOR_CODE_RETENTION}
						element={<ColorCodeRetention />}
					/>
					<Route
						path={workExperimentRoutes.XLSX_CSV_EDITOR}
						element={<XlsxCsvEditor />}
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
					<Route
						path={"/interview-test"}
						element={<InterviewTest />}
					/>
				</Routes>
			</Router>
		</React.Fragment>
	)
}

export default App
