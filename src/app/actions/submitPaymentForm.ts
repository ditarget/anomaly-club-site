'use server'

import type { IPaymentForm } from '@/src/components/forms/payment-form/payment-form.types'

type SubmitFormResult =
	| {
			success: true
			paymentUrl: string
	  }
	| {
			success: false
			error: {
				code:
					| 'VALIDATION_ERROR'
					| 'HAS_ACTIVE_SUBSCRIPTION'
					| 'SUBSCRIBER_CREATE_ERROR'
					| 'PAYMENT_LINK_ERROR'
					| 'INTERNAL_ERROR'
				message: string
			}
	  }

function validate(data: IPaymentForm): string | null {
	if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
		return 'Неверный email'
	}

	if (!data.phone || data.phone.replace(/\D/g, '').length < 10) {
		return 'Неверный телефон'
	}

	if (!data.agree_privacy_policy) {
		return 'Необходимо согласие на обработку персональных данных'
	}

	if (!data.agree_offers) {
		return 'Необходимо принять условия оферты'
	}

	return null
}

export async function submitPaymentForm(
	data: IPaymentForm
): Promise<SubmitFormResult> {
	const validationError = validate(data)

	if (validationError) {
		return {
			success: false,
			error: {
				code: 'VALIDATION_ERROR',
				message: validationError
			}
		}
	}

	let phone = data.phone.replace(/\D/g, '')

	if (phone.startsWith('89')) {
		phone = '79' + phone.slice(2)
	}

	if (phone.length === 10 && phone.startsWith('9')) {
		phone = '7' + phone
	}

	phone = `+${phone}`

	const apiUrl = process.env.API_URL

	try {
		// Шаг 1. Проверяем/создаем подписчика
		const subscriberResponse = await fetch(
			`${apiUrl}/subscriber/acquaintance`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: data.email,
					phone
				})
			}
		)

		const subscriberRaw = await subscriberResponse.text()

		if (!subscriberResponse.ok) {
			return {
				success: false,
				error: {
					code: 'SUBSCRIBER_CREATE_ERROR',
					message:
						'Ошибка в формировании ссылки на оплату. Попробуйте позже. Или обратитесь в службу заботы.'
				}
			}
		}

		const subscriber = JSON.parse(subscriberRaw)

		if (subscriber.has_active_subscription) {
			return {
				success: false,
				error: {
					code: 'HAS_ACTIVE_SUBSCRIPTION',
					message: 'Активная подписка'
				}
			}
		}

		// Шаг 2. Создаем ссылку на оплату
		const paymentResponse = await fetch(
			`${apiUrl}/cloud-payments/payment-link/${subscriber.id}`
		)

		const paymentRaw = await paymentResponse.text()

		if (!paymentResponse.ok) {
			return {
				success: false,
				error: {
					code: 'PAYMENT_LINK_ERROR',
					message:
						'Ошибка в создании ссылки на оплату. Попробуйте позже. Или обратитесь в службу заботы.'
				}
			}
		}

		const paymentData = JSON.parse(paymentRaw)

		return {
			success: true,
			paymentUrl: paymentData.payment_url
		}
	} catch {
		return {
			success: false,
			error: {
				code: 'INTERNAL_ERROR',
				message:
					'Не удалось выполнить запрос. Попробуйте позже. Или обратитесь в службу заботы.'
			}
		}
	}
}
