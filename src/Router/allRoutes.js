import Home from '../Pages/Home'
import {
	parentPaths,
	hooksPaths,
	reactBestPracticesPaths,
	scrimbaCoursePaths,
	workExperimentPaths,
	otherPaths,
} from '../Router/allPaths'

import UseStateHook from '../Pages/Hooks/UseStateHook'

import DigitalBusinessCard from '../Pages/ScrimbaCourse/DigitalBusinessCard/DigitalBusinessCard'
import UseEffectHook from '../Pages/Hooks/UseEffectHook'
import UseRefHook from '../Pages/Hooks/useRef'
import ColorCodeRetention from '../Pages/WorkExperiments/ColorCodeRetention'
import XlsxCsvEditor from '../Pages/WorkExperiments/XlsxCsvEditor/XlsxCsvEditor'
import CounterHome from '../Pages/CounterHome'
import HooksHome from '../Pages/Hooks/HooksHome'

const otherRoutes = [
	{
		path: '/',
		element: <Home />,
	},
	{
		path: otherPaths.COUNTER_TUTORIAL,
		element: <CounterHome />,
	},
]

const scrimbaCourseRoutes = {
	path: parentPaths.SCRIMBA,
	children: [
		{
			path: scrimbaCoursePaths.DIGITAL_BUSSINESS_CARD,
			element: <DigitalBusinessCard />,
		},
	],
}

const hooksRoutes = {
	path: parentPaths.HOOKS,
	children: [
		{
			path: '',
			element: <HooksHome />,
		},
		{
			path: hooksPaths.USE_STATE_HOOK,
			element: <UseStateHook />,
		},
		{
			path: hooksPaths.USE_EFFECT_HOOK,
			element: <UseEffectHook />,
		},
		{
			path: hooksPaths.USE_REF_HOOK,
			element: <UseRefHook />,
		},
	],
}

const workExperimentRoutes = {
	path: parentPaths.WORK_EXPERIMENTS,
	children: [
		{
			path: workExperimentPaths.COLOR_CODE_RETENTION,
			element: <ColorCodeRetention />,
		},
		{
			path: workExperimentPaths.XLSX_CSV_EDITOR,
			element: <XlsxCsvEditor />,
		},
	],
}

const reactBestPracticesRoutes = {
	path: parentPaths.REACT_BEST_PRACTICES,
	children: [
		{
			path: workExperimentPaths.PAGE_AND_PRESENTATIONAL_COMPONENTS,
			// element: <TodoPageContainer />,
		},
	],
}

export const allRoutes = [
	...otherRoutes,
	scrimbaCourseRoutes,
	hooksRoutes,
	workExperimentRoutes,
	reactBestPracticesRoutes,
]
