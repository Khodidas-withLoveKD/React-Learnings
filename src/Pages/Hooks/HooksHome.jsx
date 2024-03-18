import React from 'react'
import { hooksPaths } from '../../Router/allPaths'
import RouteLink from '../../Components/shared/RouteLink'

const HooksHome = () => {
	return (
		<div className="App">
			<h2>Hook Routes</h2>
			<RouteLink linkTo={hooksPaths.USE_STATE_HOOK} linkTitle={'useState'} />
			<RouteLink linkTo={hooksPaths.USE_EFFECT_HOOK} linkTitle={'useEffect'} />
			<RouteLink linkTo={hooksPaths.USE_REF_HOOK} linkTitle={'useRef'} />
		</div>
	)
}

export default HooksHome
