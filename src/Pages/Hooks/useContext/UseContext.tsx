import Section from './Section'
import Heading from './Heading'

const UseContext = () => {
	// create context

	return (
		<Section>
			<Heading>Title</Heading>
			<Section>
				<Heading>Heading</Heading>
				<Heading>Heading</Heading>
				<Heading>Heading</Heading>
				<Section>
					<Heading>Sub-heading</Heading>
					<Heading>Sub-heading</Heading>
					<Heading>Sub-heading</Heading>
				</Section>
			</Section>
		</Section>
	)
}

export default UseContext
