const Debounce = () => {
	// the input api call should happen after 2 sec of stop typing
	let timer: NodeJS.Timeout
	const debounce = (func: Function, timeout: number) => {
		console.log('kd func:', func)
		console.log('kd debounce:')
		return (...args: any) => {
			clearTimeout(timer)
			timer = setTimeout(() => {
				func(args)
			}, timeout)
		}
	}
	const onSearchInputChange = (e: any) => {
		console.log('kd e:', e)
		console.log('kd value:', e[0].target.value)
		console.log('kd making Search Query')
	}

	const processChange = debounce((e: any) => onSearchInputChange(e), 2000)

	const ignoreFirstAndDebounce = (func: Function, timeout: number) => {
		let timer2: any
		return (...args: any) => {
			console.log('kd timer:', timer2)
			if (!timer2) {
				func(args)
			}

			// This will make the user wait for `timeout` time before letting him make the search query again
			clearTimeout(timer2)
			timer2 = setTimeout(() => {
				timer2 = undefined
			}, timeout)
		}
	}

	const processIgnoreFirstDebounce = ignoreFirstAndDebounce(
		(e: any) => onSearchInputChange(e),
		2000
	)

	return (
		<>
			Debounce effect
			<input onChange={processChange} />
			<br />
			Debounce effect with ignore first
			<input onChange={processIgnoreFirstDebounce} />
		</>
	)
}

export default Debounce
