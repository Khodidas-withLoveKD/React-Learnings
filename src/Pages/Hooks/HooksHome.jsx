import React from 'react'
import { Link } from 'react-router-dom'

const HooksHome = () => {
	return (
		<div className="App">
			<h2>Hook Routes</h2>
			<h6>
				<Link to={'/hooks/use-state'}>useState</Link>
			</h6>
			<h6>
				<Link to={'/hooks/use-effect'}>useEffect</Link>
			</h6>
		</div>
	)
}

export default HooksHome
