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
import WorkExperiments from '../Pages/WorkExperiments/WorkExperiments'
import Redux from '../Pages/Redux/ReduxHome'
import TodoListPage from '../Pages/ReactBestPractices/PagesAndPresentationalComponents/TodoListPage'
import { HomePage } from '../Components/shared/HomePageRouter'

const otherRoutes = [
	{
		path: '/',
		element: <HomePage />,
	},
	{
		path: otherPaths.COUNTER_TUTORIAL,
		element: <CounterHome />,
	},
	{
		path: otherPaths.REDUX,
		element: <Redux />,
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
			path: '',
			element: <WorkExperiments />,
		},
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
			path: reactBestPracticesPaths.PAGE_AND_PRESENTATIONAL_COMPONENTS,
			element: <TodoListPage />,
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
