import React from 'react'
import { Link } from 'react-router-dom'

import { parentPaths, scrimbaCoursePaths } from '../Router/allPaths'

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="App">
					<h2>All Routes</h2>
					<h6>
						<Link to="/counters">Counters</Link>
					</h6>
					<h6>
						<Link to="/hooks">Hooks</Link>
					</h6>
					<h6>
						<Link to="/work-experiments/">Work Experiments</Link>
					</h6>
					<h6>
						<Link to="/functional-programming-in-js/">
							Functional Programming in JS
						</Link>
					</h6>
					<h6>
						<Link to="/redux">Redux</Link>
					</h6>
					<h6>
						<Link
							to={
								parentPaths.SCRIMBA + scrimbaCoursePaths.DIGITAL_BUSSINESS_CARD
							}
						>
							Scrimba Course
						</Link>
					</h6>
				</div>
			</React.Fragment>
		)
	}
}

export default Home
