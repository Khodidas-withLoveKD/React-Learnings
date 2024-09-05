import { useContext } from 'react'
import { LevelContext } from './LevelContext'

const Heading = ({ children }: { children: string }) => {
	// show children based on heading's level

	const level = useContext(LevelContext)
	console.log('kd level:', level)

	switch (level) {
		case 1:
			return <h1>{children}</h1>
		case 2:
			return <h2>{children}</h2>
		case 3:
			return <h3>{children}</h3>
	}

	return <></>
}

export default Heading

// TODO: implement render props
