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

	return (
		<>
			<input onChange={processChange} />
		</>
	)
}

export default Debounce
