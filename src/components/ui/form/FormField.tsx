import type { ReactNode } from 'react'

interface FormFieldProps {
	children: ReactNode
	hasError?: string
}

export function FormField({ children, hasError }: FormFieldProps) {
	return (
		<div className='w-full'>
			{children}

			<div className='h-4 mb-1'>
				{hasError && (
					<p className='text-xs font-normal text-red-400'>{hasError}</p>
				)}
			</div>
		</div>
	)
}
