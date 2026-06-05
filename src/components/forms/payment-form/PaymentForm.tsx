'use client'

import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '../../ui/base/Button'
import { Agreements } from '../fields/Agreements'
import { EmailField } from '../fields/EmailField'
import { PhoneField } from '../fields/PhoneField'

import type { IPaymentForm } from './payment-form.types'
import { submitPaymentForm } from '@/src/app/actions/submitPaymentForm'

export function PaymentForm() {
	const methods = useForm<IPaymentForm>({
		mode: 'onChange',
		defaultValues: {
			email: '',
			phone: '',
			agree_offers: false,
			agree_privacy_policy: false
		}
	})

	const onSubmit = async (dataForm: IPaymentForm) => {
	try {
		const result = await submitPaymentForm(dataForm)

		if (
			!result.success &&
			result.error.code === 'HAS_ACTIVE_SUBSCRIPTION'
		) {
			methods.reset()
			window.location.href = '/thank-you'
			return
		}

		if (!result.success) {
			alert(result.error.message)
			return
		}

		methods.reset()
		window.location.href = result.paymentUrl
	} catch {
		alert(
			'Что-то пошло не так, попробуйте обновить страницу и повторить попытку'
		)
	}
}
	

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={methods.handleSubmit(onSubmit)}
				className='flex flex-col items-center max-w-87.5 w-full'
			>
				<EmailField />
				<PhoneField />
				<Agreements />
				<Button
					type='submit'
					size='large'
				>
					{methods.formState.isSubmitting ? 'Создаём ссылку...' : 'Оформить подписку'}
				</Button>
			</form>
		</FormProvider>
	)
}
