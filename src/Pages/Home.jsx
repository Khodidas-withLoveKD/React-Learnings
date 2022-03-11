import React from 'react'
import { Link } from 'react-router-dom'

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
				</div>
			</React.Fragment>
		)
	}
}

export default Home
