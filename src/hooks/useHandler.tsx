'use client'

import { useRef } from 'react'
import type { ControllerRenderProps } from 'react-hook-form'

import type { IPaymentForm } from '../components/forms/payment-form/payment-form.types'

export function useHandler(util: (input: string) => string) {
	const inputRef = useRef<HTMLInputElement>(null)
	const prevValueRef = useRef('')

	const handler = (
		field: ControllerRenderProps<IPaymentForm, keyof IPaymentForm>
	) => ({
		ref: inputRef,
		onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
			const input = inputRef.current
			if (!input) return

			const raw = e.target.value
			const prevValue = prevValueRef.current

			const selectionStart = input.selectionStart ?? raw.length
			const selectionEnd = input.selectionEnd ?? raw.length
			const hadSelection = selectionStart !== selectionEnd

			const cursor = selectionStart
			const isDelete = raw.length < prevValue.length
			const isFromEnd = cursor === raw.length

			const digitsBeforeCursor = raw.slice(0, cursor).replace(/\D/g, '').length

			let nextValue = raw
			let shouldSetCursor = false

			if (hadSelection && isDelete) {
				const updated = raw.slice(0, selectionStart) + raw.slice(selectionEnd)
				nextValue = util(updated)
				shouldSetCursor = true
			} else if (isDelete) {
				if (isFromEnd) {
					if (prevValue.endsWith('.')) {
						const shortened = prevValue.slice(0, -2)
						nextValue = util(shortened)
					} else {
						nextValue = util(raw)
					}
				} else {
					nextValue = util(raw)
					shouldSetCursor = true
				}
			} else {
				nextValue = util(raw)
				if (!isFromEnd) {
					shouldSetCursor = true
				}
			}

			prevValueRef.current = nextValue
			field.onChange(nextValue)

			if (shouldSetCursor) {
				let newCursor = 0
				let digitCount = 0

				while (
					digitCount < digitsBeforeCursor &&
					newCursor < nextValue.length
				) {
					if (/\d/.test(nextValue[newCursor])) {
						digitCount++
					}
					newCursor++
				}

				requestAnimationFrame(() => {
					input.setSelectionRange(newCursor, newCursor)
				})
			}
		}
	})

	return handler
}
