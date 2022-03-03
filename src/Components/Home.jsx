import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<h2>This is home page</h2>
				Here we will have all routes
				<h6>
					<Link to="/counter">Counter</Link>
				</h6>
				<h6>
					<Link to="/router-test">Router Test</Link>
				</h6>
			</React.Fragment>
		)
	}
}

export default Home
