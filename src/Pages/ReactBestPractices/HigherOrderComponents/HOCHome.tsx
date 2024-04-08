import { useState } from 'react'
import { EnhancedLoader, LoaderHOC } from './LoaderHOC'

const HOCHome = () => {
	const [loader, setLoader] = useState<React.ReactElement>(LoaderHOC)

	setTimeout(() => {
		setLoader(EnhancedLoader)
	}, 2000)

	// SHow the normal loader for while then show the hoc loader
	return (
		<>
			<h2>This is HOC Demo</h2>
			<br />
			{loader}
		</>
	)
}

export default HOCHome
