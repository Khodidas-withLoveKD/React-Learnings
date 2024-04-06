enum FormId {
	NAME = 'name',
	EMAIL = 'email',
	PHONE = 'phone',
}

const KDReactHookForm = () => {
	const { NAME, EMAIL, PHONE } = FormId

	const handleChange = (e: any) => {
		console.log('kd e:', e)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		console.log('kd e:', e)
	}

	return (
		<>
			<h1>React Hook Form</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor={NAME}>Enter Name</label>
					<input type="text" id={NAME} onChange={handleChange} name={NAME} />
				</div>
				<div>
					<label htmlFor={EMAIL}>Enter Email</label>
					<input type={'email'} id={EMAIL} onChange={handleChange} />
				</div>
				<div>
					<label htmlFor={PHONE}>Enter Phone</label>
					<input type="number" id={PHONE} onChange={handleChange} />
				</div>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}

export default KDReactHookForm
