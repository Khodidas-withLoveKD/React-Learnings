import { useState } from 'react'
import { IObjProps } from 'shared/interfaces'

const useKDFormHook = () => {
	const [formValues, setFormValues] = useState<IObjProps>({})

	const onChange = (event: any) => {
		const { name, value } = event.target
		setFormValues({
			...formValues,
			[name]: value,
		})
	}

	const setValue = (key: string, value: string | number) => {
		// console.log('kd value:', value)
		// console.log('kd key:', [key])
		setFormValues((existingValues: IObjProps) => {
			// console.log('kd existingValues:', existingValues)
			const modifiedValues = {
				...existingValues,
				[key]: value,
			}
			// console.log('kd modifiedValues:', modifiedValues)

			return modifiedValues
		})
	}

	const getValues = (key: string) => {
		// console.log('kd key:', key)
		// console.log('kd formValues[key]:', formValues[key])
		return formValues[key]
	}

	return { setValue, getValues, formValues, onChange }
}

export default useKDFormHook
