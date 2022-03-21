import React from 'react'

let sayHello = () => {
	console.log('Hello')
}
const NavBar = ({ totalItems, totalQuantity }) => {
	return (
		<div>
			<nav className="navbar navbar-light bg-light">
				<div className="container-fluid">
					<a className="navbar-brand">Navbar</a>
				</div>
			</nav>
			Total Items
			<span className="badge rounded-pill bg-info m-2 text-dark">
				{totalItems}
			</span>
			Total Quantity
			<span className="badge rounded-pill bg-info m-2 text-dark">
				{totalQuantity}
			</span>
		</div>
	)
}
sayHello()
export default NavBar
