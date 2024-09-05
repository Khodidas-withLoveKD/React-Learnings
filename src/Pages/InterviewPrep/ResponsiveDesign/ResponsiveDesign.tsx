import useResponsiveDevice from './useResponsiveDevice'

const ResponsiveDesign = () => {
	// some menu on left, Heading on top, a right panel and footer
	const { isPhone, isTablet, isSmallDesktop, isLargeDesktop } =
		useResponsiveDevice()
	console.group()
	console.log('kd RD isPhone:', isPhone)
	console.log('kd isTablet:', isTablet)
	console.log('kd isSmallDesktop:', isSmallDesktop)
	console.log('kd isLargeDesktop:', isLargeDesktop)
	console.groupEnd()

	// Let's do it for tablet, phone and computer
	const commonStyles = {
		heading: {
			width: '100%',
			height: '100px',
			backgroundColor: 'purple',
		},
		leftMenu: {
			width: '100px',
			height: '150px',
			backgroundColor: 'pink',
		},
		rightPanel: {
			width: '200px',
			height: '300px',
			backgroundColor: 'lime',
		},
		footer: {
			width: '100%',
			height: '200px',
			backgroundColor: 'cyan',
		},
		content: {
			display: 'flex',
			justifyContent: 'space-between',
			flexGrow: 1,
		},
		container: {
			width: '100vw',
			height: '100vh',
			display: 'flex',
			flexDirection: 'column',
		},
	}

	const phoneStyles = {
		...commonStyles,
		leftMenu: {
			...commonStyles.leftMenu,
			width: '100%',
		},
		rightPanel: {
			...commonStyles.rightPanel,
			width: '100%',
		},
	}

	const tabletStyles = {
		...commonStyles,
		leftMenu: {
			...commonStyles.leftMenu,
			width: '50px',
		},
		rightPanel: {
			...commonStyles.rightPanel,
			width: '100%',
		},
	}

	const getResponsiveStyles = () =>
		isPhone ? phoneStyles : isTablet ? tabletStyles : commonStyles

	const styles = getResponsiveStyles()

	const heading = () => (
		<div style={styles.heading} className="heading-mini"></div>
	)
	const leftMenu = () => <div style={styles.leftMenu}></div>
	const rightPanel = () => <div style={styles.rightPanel}></div>
	const footer = () => <div style={styles.footer}></div>
	const content = () => {
		const phoneContent = () => (
			<>
				<div style={styles.content}>{leftMenu()}</div>
				{rightPanel()}
			</>
		)

		const tabletContent = () => (
			<>
				<div style={styles.content}>{leftMenu()}</div>
				{rightPanel()}
			</>
		)

		const desktopContent = () => (
			<div style={styles.content}>
				{leftMenu()}
				{rightPanel()}
			</div>
		)

		return isPhone
			? phoneContent()
			: isTablet
			? tabletContent()
			: desktopContent()
	}

	return (
		<div style={styles.container}>
			{heading()}
			{content()}
			{footer()}
		</div>
	)
}

export default ResponsiveDesign
