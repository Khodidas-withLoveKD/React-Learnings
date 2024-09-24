import {
	HomePageRoutes,
	ReactBestPracticesRoutes,
	InterviewPrepRoutes,
	HooksRoutes,
} from 'Router/HomePagesRoutes'
import { IRouteLink } from 'shared/interfaces'
import { HomePageRoutesType } from 'shared/types'
import RouteLink from './RouteLink'

interface IHomePageRouter {
	heading: string
	routes: HomePageRoutesType
}

const HomePageRouter = (props: IHomePageRouter) => {
	const { heading, routes } = props

	return (
		<div>
			<h2>{heading}</h2>
			{routes.map(({ path, title }: IRouteLink) => (
				<RouteLink path={path} title={title} key={path} />
			))}
		</div>
	)
}

// export all the routes now
const HomePage = () => (
	<HomePageRouter heading="All Routes" routes={HomePageRoutes} />
)

const ReactBestPracticesHomePage = () => (
	<HomePageRouter
		heading="React Best Practices"
		routes={ReactBestPracticesRoutes}
	/>
)

const InterviewPrepHomePage = () => (
	<HomePageRouter
		heading="Interview Preparation"
		routes={InterviewPrepRoutes}
	/>
)

const HooksHomePage = () => (
	<HomePageRouter heading="Hooks Routes" routes={HooksRoutes} />
)

export {
	HomePage,
	ReactBestPracticesHomePage,
	InterviewPrepHomePage,
	HooksHomePage,
}
