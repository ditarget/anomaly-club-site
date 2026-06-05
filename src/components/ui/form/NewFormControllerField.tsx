'use client'

import type { ReactElement } from 'react'
import {
	Controller,
	type ControllerRenderProps,
	type RegisterOptions,
	useFormContext
} from 'react-hook-form'

import type { IPaymentForm } from '../../forms/payment-form/payment-form.types'

import { FormField } from './FormField'

interface FormControllerFieldProps<K extends keyof IPaymentForm> {
	variant: K
	hasError?: string
	rules?: RegisterOptions<IPaymentForm, K>
	render: (field: ControllerRenderProps<IPaymentForm, K>) => ReactElement
}

export function NewFormControllerField<K extends keyof IPaymentForm>({
	variant,
	hasError,
	rules,

	render
}: FormControllerFieldProps<K>) {
	const { control } = useFormContext<IPaymentForm>()

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
