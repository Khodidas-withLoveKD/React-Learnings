import { useContext } from 'react'
import { LevelContext } from './LevelContext'

interface ISection {
	children: any
}

const Section = (props: ISection) => {
	const level = useContext(LevelContext)

	const { children } = props

	return (
		<section>
			<LevelContext.Provider value={level + 1}>
				{children}
			</LevelContext.Provider>
		</section>
	)
}

export default Section
