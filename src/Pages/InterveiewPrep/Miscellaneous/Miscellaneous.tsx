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

const Miscellaneous = () => {
	// page scroll progress bar

	return (
		<>
			<ScrollContainter />
		</>
	)
}

export default Miscellaneous
