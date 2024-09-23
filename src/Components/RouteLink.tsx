import { Link } from 'react-router-dom'
import { IRouteLink } from 'shared/interfaces'

const RouteLink = ({ path, title }: IRouteLink) => (
	<h6>
		<Link to={path}>{title}</Link>
	</h6>
)

export default RouteLink
