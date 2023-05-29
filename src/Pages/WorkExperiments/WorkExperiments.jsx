import React from 'react'

import RouteLink from '../../Components/Common/RouteLink'
import { workExperimentRoutes } from '../Routes/InternalRoutes'

const WorkExperiments = () => {
	return (
		<div className="App">
			<h2>Work Experiment Routes</h2>
			<RouteLink linkTo={workExperimentRoutes.COLOR_CODE_RETENTION} linkTitle={'Color Code Retention'} />
			<RouteLink linkTo={workExperimentRoutes.XLSX_CSV_EDITOR} linkTitle={'XLSX-CSV Editor'} />
		</div>
	)
}

export default WorkExperiments
