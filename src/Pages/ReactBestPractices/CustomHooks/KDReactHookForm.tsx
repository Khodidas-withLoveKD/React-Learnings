import { useEffect, useRef, useState } from 'react'

enum FormId {
	NAME = 'name',
	EMAIL = 'email',
	PHONE = 'phone',
}

const KDReactHookForm = () => {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const modalRef = useRef<any>()

	const Modal = () => {
		const modalStyles = {
			modal: {
				height: '200px',
				width: '200px',
				backgroundColor: 'lime',
				margin: '10% auto',
				zIndex: 1,
			},
			modalContainer: {
				display: isModalOpen ? 'block' : 'none',
				height: '100vh',
				width: '100vw',
				left: 0,
				right: 0,
				top: 0,
				backgroundColor: 'rgba(0, 0, 0, 0.4)',
				position: 'absolute',
			},
		}

		const handleToggle = () =>
			setIsModalOpen((currentValue: boolean) => !currentValue)

		useEffect(() => {
			const handleClickOutside = (event: any) => {
				if (modalRef.current && !modalRef.current.contains(event.target)) {
					setIsModalOpen(false)
				}
			}

			document.addEventListener('mousedown', handleClickOutside)

			return () => document.removeEventListener('mousedown', handleClickOutside)
		}, [])

		return (
			<div>
				<button onClick={handleToggle}>Toggle Modal</button>
				<div style={modalStyles.modalContainer}>
					<div style={modalStyles.modal} ref={modalRef}>
						Some Content
					</div>
				</div>
			</div>
		)
	}

	const { NAME, EMAIL, PHONE } = FormId

	const handleChange = (e: any) => {
		console.log('kd e:', e)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		console.log('kd e:', e)
	}

	const KDsForm = () => (
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
	)

	return (
		<>
			<h2>Modal Test</h2>
			<Modal />
			<h2>React Hook Form</h2>
			<KDsForm />
		</>
	)
}

export default KDReactHookForm
