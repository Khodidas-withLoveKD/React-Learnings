import React from 'react'

class NavBar extends React.Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-light bg-light">
					<div className="container-fluid">
						<a className="navbar-brand">Navbar</a>
					</div>
				</nav>
				Total Items
				<span className="badge rounded-pill bg-info m-2 text-dark">
					{this.props.totalItems}
				</span>
				Total Quantity
				<span className="badge rounded-pill bg-info m-2 text-dark">
					{this.props.totalQuantity}
				</span>
			</div>
		)
	}
}

export default NavBar
