import { useState } from 'react'
import { IObjProps } from '../../../shared/interfaces'

const useKDFormHook = () => {
	const [formValues, setFormValues] = useState<IObjProps>({})

	const setValue = (key: string, value: string | number) => {
		setFormValues((existingValues: IObjProps) => {
			const modifiedValues = {
				...existingValues,
				key: value,
			}

			return modifiedValues
		})
	}

	const getValues = (key: string) => formValues[key]

	return { setValue, getValues }
}

export default useKDFormHook
