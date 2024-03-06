import React from 'react'

import {
	parentPaths,
	reactBestPracticesPaths,
	scrimbaCoursePaths,
} from '../Router/allPaths'
import RouteLink from '../Components/Common/RouteLink'

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<h2>All Routes</h2>
					<RouteLink linkTo={'/counters'} linkTitle={'Counters'} />
					<RouteLink linkTo={'/hooks'} linkTitle={'Hooks'} />
					<RouteLink
						linkTo={parentPaths.WORK_EXPERIMENTS}
						linkTitle={'Work Experiments'}
					/>
					<RouteLink
						linkTo={'/functional-programming-in-js/'}
						linkTitle={'Functional Programming in JS'}
					/>
					<RouteLink linkTo={'/redux'} linkTitle={'Redux'} />
					<RouteLink
						linkTo={
							parentPaths.SCRIMBA + scrimbaCoursePaths.DIGITAL_BUSSINESS_CARD
						}
						linkTitle={'Scrimba Course'}
					/>
					<RouteLink
						linkTo={
							parentPaths.REACT_BEST_PRACTICES +
							reactBestPracticesPaths.PAGE_AND_PRESENTATIONAL_COMPONENTS
						}
						linkTitle={'React Best Practices'}
					/>
				</div>
			</React.Fragment>
		)
	}
}

export default Home
