import Home from '../Pages/Home'
import {
	parentPaths,
	hooksPaths,
	reactBestPracticesPaths,
	scrimbaCoursePaths,
	workExperimentPaths,
} from '../Router/allPaths'

import DigitalBusinessCard from '../Pages/ScrimbaCourse/DigitalBusinessCard/DigitalBusinessCard'

const homeRoute = {
	path: '/',
	element: <Home />,
}

const scrimbaCourseRoutes = {
	path: parentPaths.SCRIMBA,
	children: [
		{
			path: scrimbaCoursePaths.DIGITAL_BUSSINESS_CARD,
			element: <DigitalBusinessCard />,
		},
	],
}

export const allRoutes = [homeRoute, scrimbaCourseRoutes]
