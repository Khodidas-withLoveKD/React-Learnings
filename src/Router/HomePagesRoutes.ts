import { HomePageRoutesType } from '../shared/types'
import {
	InterviewPrepPaths,
	hooksPaths,
	parentPaths,
	reactBestPracticesPaths,
	scrimbaCoursePaths,
} from './allPaths'

// will have the routes in the form o f array[{link, linkTo}]

export const HomePageRoutes: HomePageRoutesType = [
	{ path: '/counters', title: 'Counters' },
	{ path: parentPaths.HOOKS, title: 'Hooks' },
	{ path: parentPaths.WORK_EXPERIMENTS, title: 'Work Experiments' },
	{
		path: '/functional-programming-in-js/',
		title: 'Functional Programming in JS',
	},
	{ path: '/redux', title: 'Redux' },
	{
		path: parentPaths.SCRIMBA + scrimbaCoursePaths.DIGITAL_BUSSINESS_CARD,
		title: 'Scrimba Course',
	},
	{
		path: parentPaths.REACT_BEST_PRACTICES,
		title: 'React Best Practices',
	},
	{
		path: InterviewPrepPaths.INTERVIEW_PREP,
		title: 'Interview Prep',
	},
]

export const HooksRoutes: HomePageRoutesType = [
	{ path: hooksPaths.USE_STATE_HOOK, title: 'Use State Hook' },
	{ path: hooksPaths.USE_EFFECT_HOOK, title: 'Use Effect Hook' },
	{ path: hooksPaths.USE_REF_HOOK, title: 'Use Ref Hook' },
	{ path: hooksPaths.USE_CONTEXT_HOOK, title: 'Use Context Hook' },
]

const {
	PAGE_AND_PRESENTATIONAL_COMPONENTS,
	CUSTOM_HOOKS,
	HIGHER_ORDER_COMPONENTS,
} = reactBestPracticesPaths

export const ReactBestPracticesRoutes: HomePageRoutesType = [
	{
		path: PAGE_AND_PRESENTATIONAL_COMPONENTS,
		title: 'Pages And Presentational Components',
	},
	{ path: CUSTOM_HOOKS, title: 'Custom Hooks' },
	{ path: HIGHER_ORDER_COMPONENTS, title: 'Higher Order Components' },
]

export const InterviewPrepRoutes: HomePageRoutesType = [
	{ path: InterviewPrepPaths.MISCELLANEOUS, title: 'Miscellaneous' },
	{ path: InterviewPrepPaths.RESPONSIVE_DESIGN, title: 'Responsive Design' },
]
