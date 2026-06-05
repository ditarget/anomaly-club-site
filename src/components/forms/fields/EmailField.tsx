'use client'

import { useFormContext } from 'react-hook-form'

import { Input } from '../../ui/base/Input'
import { FormField } from '../../ui/form/FormField'

export function EmailField() {
	const {
		register,
		watch,
		formState: { errors }
	} = useFormContext()

	const value = watch('email')
	const error = errors.email?.message

	return (
		<FormField hasError={typeof error === 'string' ? error : undefined}>
			<Input
				variant='email'
				type='email'
				placeholder='Email'
				autoComplete='email'
				hasError={!!error}
				isValid={!!value && !error}
				{...register('email', {
					required: 'Email обязателен',
					pattern: {
						value:
							/^(?!\.)(?!.*\.\.)[a-zA-Z0-9_%+-]+(\.[a-zA-Z0-9_%+-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/,
						message: 'Введите корректный email'
					},
					maxLength: {
						value: 254,
						message: 'Email не может быть длиннее 254 символов'
					}
				})}
			/>
		</FormField>
	)
}
