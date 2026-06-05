'use client'

import { useFormContext } from 'react-hook-form'

import { type IPaymentForm } from '../payment-form/payment-form.types'

import { useHandler } from '@/src/hooks/useHandler'
import { formatPhone } from '@/src/utils/formatPhone'
import { validatePhoneService } from '@/src/utils/phoneValidator'
import { Input } from '@/ui/base/Input'
import { NewFormControllerField } from '@/ui/form/NewFormControllerField'

export function PhoneField() {
	const {
		watch,
		formState: { errors }
	} = useFormContext<IPaymentForm>()

	const value = watch('phone')
	const error = errors.phone?.message

	const formatPhoneHandler = useHandler(formatPhone)

	return (
		<NewFormControllerField
			variant='phone'
			hasError={typeof error === 'string' ? error : undefined}
			rules={{
				required: 'Телефон обязателен',
				validate: validatePhoneService
			}}
			render={field => (
				<Input
					variant='phone'
					type='tel'
					placeholder='+7 (___) ___ ____'
					autoComplete='tel'
					inputMode='numeric'
					hasError={!!error}
					isValid={!!value && !error}
					{...field}
					{...formatPhoneHandler(field)}
				/>
			)}
		/>
	)
}
