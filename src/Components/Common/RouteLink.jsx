import { Link } from "react-router-dom";

const RouteLink = ({linkTo, linkTitle}) => ( 
			<h6>
				<Link to={linkTo}>
					{linkTitle}
				</Link>
			</h6>
   );
 
export default RouteLink;