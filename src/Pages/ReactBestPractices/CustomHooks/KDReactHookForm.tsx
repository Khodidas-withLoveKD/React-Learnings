import { useEffect, useRef, useState } from 'react'
import useKDFormHook from './useKDFormHook'

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
				position: 'fixed',
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

	// Hook Form related things
	// ≠≠≠≠======≠≠≠=======≠≠≠

	const { NAME, EMAIL, PHONE } = FormId

	const { setValue, getValues, formValues, onChange } = useKDFormHook()
	console.log('kd formValues:', formValues)
	console.log('kd formValues.name:', formValues.NAME)
	console.log('kd formValues[NAME]:', formValues[NAME])
	const [name, setValuesetName] = useState<string>('')
	const inputRef = useRef<HTMLInputElement | null>(null)
	const [email, setEmail] = useState<string>('')
	const emailRef = useRef<HTMLInputElement | null>(null)

	const handleChange = (key: FormId, value: string | number) => {
		// e.preventDefault()
		// setValue(key, e.target.value)
		setValue(key, value)
	}

	const handleSubmit = (e: any) => {
		e.preventDefault()
		console.log('kd e:', e)
	}
	// console.log('kd getValues(NAME):', getValues(NAME))

	const KDsForm = () => (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor={NAME}>Enter Name</label>
				<input
					type="text"
					id={NAME}
					// onChange={(e: any) => handleChange(NAME, e.target.value)}
					onChange={onChange}
					name={NAME}
					value={formValues[NAME]}
					// ref={(ref) => {
					// 	console.log('kd ref:', ref)
					// 	inputRef.current = ref
					// 	inputRef.current?.focus()
					// }}
				/>
			</div>
			<div>
				<label htmlFor={EMAIL}>Enter Email</label>
				<input
					type={'email'}
					id={EMAIL}
					onChange={(e: any) => {
						handleChange(EMAIL, e.target.value)
						emailRef.current?.focus()
					}}
					value={email}
					// ref={(ref) => {
					// 	emailRef.current = ref
					// 	emailRef.current?.focus()
					// }}
				/>
			</div>
			<div>
				<label htmlFor={PHONE}>Enter Phone</label>
				<input
					type="number"
					id={PHONE}
					onChange={(e: any) => handleChange(e, PHONE)}
				/>
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
