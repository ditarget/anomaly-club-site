'use client'

import type { ReactElement } from 'react'
import {
	Controller,
	type ControllerRenderProps,
	type RegisterOptions,
	useFormContext
} from 'react-hook-form'

import { FormField } from './FormField'

interface FormControllerFieldProps {
	variant: string
	hasError?: string
	rules?: RegisterOptions
	render: (field: ControllerRenderProps) => ReactElement
}

export function FormControllerField({
	variant,
	hasError,
	rules,
	render
}: FormControllerFieldProps) {
	const { control } = useFormContext()

	return (
		<FormField hasError={hasError}>
			<Controller
				name={variant}
				control={control}
				rules={rules}
				render={({ field }) => render(field)}
			/>
		</FormField>
	)
}


