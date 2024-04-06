import { HomePageRoutesType } from '../shared/types'
import {
	parentPaths,
	reactBestPracticesPaths,
	scrimbaCoursePaths,
} from './allPaths'

// will have the routes in the form o f array[{link, linkTo}]

export const HomePageRoutes: HomePageRoutesType = [
	{ path: '/counters', title: 'Counters' },
	{ path: '/hooks', title: 'Hooks' },
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
]

export const ReactBestPracticesRoutes: HomePageRoutesType = [
	{
		path: reactBestPracticesPaths.PAGE_AND_PRESENTATIONAL_COMPONENTS,
		title: 'Pages And Presentational Components',
	},
	{ path: reactBestPracticesPaths.CUSTOM_HOOKS, title: 'Custom Hooks' },
]
