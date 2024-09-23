import React from 'react'

import RouteLink from 'Components/RouteLink'
import { workExperimentPaths } from 'Router/allPaths'

const WorkExperiments = () => {
	return (
		<div className="App">
			<h2>Work Experiment Routes</h2>
			<RouteLink
				linkTo={workExperimentPaths.COLOR_CODE_RETENTION}
				linkTitle={'Color Code Retention'}
			/>
			<RouteLink
				linkTo={workExperimentPaths.XLSX_CSV_EDITOR}
				linkTitle={'XLSX-CSV Editor'}
			/>
		</div>
	)
}

export default WorkExperiments
