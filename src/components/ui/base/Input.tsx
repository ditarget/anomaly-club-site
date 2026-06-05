import type { HTMLAttributes } from 'react'

import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'

interface InputProps {
	variant: string
	type: string
	hasError: boolean | undefined
	isValid: boolean | undefined
	placeholder: string
	autoComplete: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	value?: string
	inputMode?: HTMLAttributes<HTMLInputElement>['inputMode']
}

export function Input({
	variant,
	type,
	hasError,
	isValid,
	placeholder,
	autoComplete,
	onChange,
	value,
	inputMode,
	...rest
}: InputProps) {
	return (
		<input
			id={variant}
			name={variant}
			type={type}
			className={cn(
				text.body,
				'block',
				'w-full',
				'mb-2 pb-5 pt-5 px-1.5',
				'border-b border-border/70',
				'focus:outline-none focus:border-blue-400',
				'placeholder-gray-500'
			)}
			placeholder={placeholder}
			autoComplete={autoComplete}
			{...rest}
			value={value}
			onChange={onChange}
			inputMode={inputMode}
		/>
	)
}
