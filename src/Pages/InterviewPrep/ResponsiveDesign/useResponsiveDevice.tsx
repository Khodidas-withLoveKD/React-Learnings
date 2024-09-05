import { useEffect, useState } from 'react'

const useResponsiveDevice = () => {
	const [isPhone, setIsPhone] = useState<boolean>(false)
	const [isTablet, setIsTablet] = useState<boolean>(false)
	const [isSmallDesktop, setIsSmallDesktop] = useState<boolean>(false)
	const [isLargeDesktop, setIsLargeDesktop] = useState<boolean>(false)

	useEffect(() => {
		const phoneMediaQuery = window.matchMedia('(max-width: 600px)')
		const tabletMediaQuery = window.matchMedia(
			'(max-width: 700px) and (min-width: 600px)'
		)
		const smallDesktopMediaQuery = window.matchMedia(
			'(max-width: 800px) and (min-width: 700px)'
		)
		const largeDesktopMediaQuery = window.matchMedia('(min-width: 800px)')

		const handlePhoneMediaQueryChange = (mediaQueriesList: any) => {
			console.log('=======\nkd PHONE mediaQueriesList:', mediaQueriesList)
			setIsPhone(mediaQueriesList.matches)
		}

		const handleTabletMediaQueryChange = (mediaQueriesList: any) => {
			console.log('=======\nkd TABLET mediaQueriesList:', mediaQueriesList)
			setIsTablet(mediaQueriesList.matches)
		}

		const handleSmallDesktopMediaQueryChange = (mediaQueriesList: any) => {
			console.log(
				'=======\nkd SMALL DESKTOP mediaQueriesList:',
				mediaQueriesList
			)
			setIsSmallDesktop(mediaQueriesList.matches)
		}

		const handleLargeDesktopMediaQueryChange = (mediaQueriesList: any) => {
			console.log(
				'=======\nkd LARGE DESKTOPmediaQueriesList:',
				mediaQueriesList
			)
			setIsLargeDesktop(mediaQueriesList.matches)
		}

		phoneMediaQuery.addEventListener('change', handlePhoneMediaQueryChange)
		tabletMediaQuery.addEventListener('change', handleTabletMediaQueryChange)
		smallDesktopMediaQuery.addEventListener(
			'change',
			handleSmallDesktopMediaQueryChange
		)
		largeDesktopMediaQuery.addEventListener(
			'change',
			handleLargeDesktopMediaQueryChange
		)

		return () => {
			phoneMediaQuery.removeEventListener('change', handlePhoneMediaQueryChange)
			tabletMediaQuery.removeEventListener(
				'change',
				handleTabletMediaQueryChange
			)
			smallDesktopMediaQuery.removeEventListener(
				'change',
				handleSmallDesktopMediaQueryChange
			)
			largeDesktopMediaQuery.removeEventListener(
				'change',
				handleLargeDesktopMediaQueryChange
			)
		}
	}, [])

	return { isPhone, isTablet, isSmallDesktop, isLargeDesktop }
}

export default useResponsiveDevice
