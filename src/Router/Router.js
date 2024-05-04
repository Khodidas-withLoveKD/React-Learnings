import {
	parentPaths,
	hooksPaths,
	reactBestPracticesPaths,
	scrimbaCoursePaths,
	workExperimentPaths,
	otherPaths,
	InterviewPrepPaths,
} from './allPaths'

import UseStateHook from '../Pages/Hooks/UseStateHook'

import DigitalBusinessCard from '../Pages/ScrimbaCourse/DigitalBusinessCard/DigitalBusinessCard'
import UseEffectHook from '../Pages/Hooks/UseEffectHook'
import UseRefHook from '../Pages/Hooks/useRef'
import ColorCodeRetention from '../Pages/WorkExperiments/ColorCodeRetention'
import XlsxCsvEditor from '../Pages/WorkExperiments/XlsxCsvEditor/XlsxCsvEditor'
import CounterHome from '../Pages/CounterHome'
import WorkExperiments from '../Pages/WorkExperiments/WorkExperiments'
import Redux from '../Pages/Redux/ReduxHome'
import TodoListPage from '../Pages/ReactBestPractices/PagesAndPresentationalComponents/TodoListPage'
import {
	HomePage,
	ReactBestPracticesHomePage,
	InterviewPrepHomePage,
	HooksHomePage,
} from '../Components/HomePageRouter'
import KDReactHookForm from '../Pages/ReactBestPractices/CustomHooks/KDReactHookForm'
import HOCHome from '../Pages/ReactBestPractices/HigherOrderComponents/HOCHome'
import Miscellaneous from '../Pages/InterveiewPrep/Miscellaneous/Miscellaneous'
import ResponsiveDesign from '../Pages/InterveiewPrep/ResponsiveDesign/ResponsiveDesign'

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
			element: <HooksHomePage />,
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
			path: '',
			element: <ReactBestPracticesHomePage />,
		},
		{
			path: reactBestPracticesPaths.PAGE_AND_PRESENTATIONAL_COMPONENTS,
			element: <TodoListPage />,
		},
		{
			path: reactBestPracticesPaths.CUSTOM_HOOKS,
			element: <KDReactHookForm />,
		},
		{
			path: reactBestPracticesPaths.HIGHER_ORDER_COMPONENTS,
			element: <HOCHome />,
		},
	],
}

const InterviewPrepRoutes = {
	path: InterviewPrepPaths.INTERVIEW_PREP,
	children: [
		{
			path: '',
			element: <InterviewPrepHomePage />,
		},
		{
			path: InterviewPrepPaths.MISCELLANEOUS,
			element: <Miscellaneous />,
		},
		{
			path: InterviewPrepPaths.RESPONSIVE_DESIGN,
			element: <ResponsiveDesign />,
		},
	],
}

export const allRoutes = [
	...otherRoutes,
	scrimbaCourseRoutes,
	hooksRoutes,
	workExperimentRoutes,
	reactBestPracticesRoutes,
	InterviewPrepRoutes,
]
