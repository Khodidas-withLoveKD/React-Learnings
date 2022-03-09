import React from 'react'

class NavBar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
					<div className="container-fluid">
						<a className="navbar-brand">Navbar</a>
					</div>
					{this.props.counterValue}
				</nav>
			</div>
		)
	}
}

export default NavBar
