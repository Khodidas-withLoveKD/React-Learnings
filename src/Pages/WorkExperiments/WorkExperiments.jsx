import React from 'react'
import { Link } from 'react-router-dom'

const WorkExperiments = () => {
	return (
		<div className="App">
			<h2>Work Experiment Routes</h2>
			<h6>
				<Link to={'/work-experiments/color-code-retention'}>
					Color Code Retention
				</Link>
			</h6>
		</div>
	)
}

export default WorkExperiments
