import { useEffect, useState } from 'react'

const ScrollContainter = () => {
	const [scrollBarWidth, setScrollBarWidth] = useState<number>(20)

	useEffect(() => {
		const handleScroll = () => {
			const totalScrollHeight = document.documentElement.scrollHeight
			const scrollBarHeight = document.documentElement.clientHeight
			const scrolled = window.scrollY
			const scrollableHeight = totalScrollHeight - scrollBarHeight
			const scrolledPercentage = (scrolled / scrollableHeight) * 100
			setScrollBarWidth(scrolledPercentage)
		}

		document.addEventListener('scroll', handleScroll)

		return () => document.removeEventListener('scroll', handleScroll)
	}, [])

	const scrollStyles = {
		container: {
			height: '50px',
			width: '100%',
			backgroundColor: 'grey',
			position: 'fixed',
			top: 0,
		},
		bar: {
			backgroundColor: 'lime',
			height: '10px',
			width: `${scrollBarWidth}%`,
		},
		scrollableContent: {
			height: '5000px',
			width: '100%',
			backgroundColor: 'cyan',
		},
	}

	const ScrollBar = () => <div style={scrollStyles.bar}></div>

	return (
		<>
			<div style={scrollStyles.container}>
				Scroll Bar
				<ScrollBar />
			</div>
			<div style={scrollStyles.scrollableContent}>Some very long content</div>
		</>
	)
}

interface Panel {
	isOpen: boolean
	setIsOpen: (val: number) => void
	panelIndex: number
}

const Accordion = () => {
	const Panel = (props: Panel) => {
		const { isOpen, setIsOpen, panelIndex } = props

		const commonStyles = {
			borderBottom: '2px solid black',
			marginBottom: '10px',
		}

		const panelStyles = {
			active: {
				backgroundColor: 'lime',
				...commonStyles,
			},
			inactive: {
				...commonStyles,
			},
		}

		const openCloseButton = (
			<button onClick={() => setIsOpen(panelIndex)}>
				{isOpen ? 'Close' : 'Open'}
			</button>
		)

		const content =
			"Thisi sis a vaery logn contetnt KD. THis is also you typing test and le's see how you can make it damn work"

		return (
			<div style={isOpen ? panelStyles.active : panelStyles.inactive}>
				{isOpen && content}
				{openCloseButton}
			</div>
		)
	}

	const [panels, setPanels] = useState<Array<number>>([0])
	const [openPanelIndex, setOpenPanelIndex] = useState<number>()

	const accordionStyles = {
		accordion: {
			width: '150px',
			backgroundColor: 'cyan',
		},
	}

	const addPanel = () => {
		setPanels([...panels, panels.length])
	}

	// const deletePanel = (panelToRemoveIndex: number) => {
	// 	setPanels(
	// 		panels.filter(
	// 			(_, index: number) => index !== panelToRemoveIndex
	// 		)
	// 	)
	// }

	return (
		<div style={accordionStyles.accordion}>
			{panels?.map((index: number) => (
				<Panel
					isOpen={openPanelIndex === index}
					setIsOpen={setOpenPanelIndex}
					panelIndex={index}
				/>
			))}
			<button onClick={addPanel}>Add Panel</button>
			{/* <button onClick={() => deletePanel()}>Delete Panel</button> */}
		</div>
	)
}

const Miscellaneous = () => {
	// page scroll progress bar

	return (
		<>
			{/* <ScrollContainter /> */}
			<Accordion />
		</>
	)
}

export default Miscellaneous
