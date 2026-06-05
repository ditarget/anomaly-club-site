import { cn } from '@/src/utils/cn'

interface CardWrapperProps {
	bg?: string
	children: React.ReactNode
	border?: boolean
}

export function CardWrapper({
	bg = 'bg-card',
	border = true,
	children
}: CardWrapperProps) {
	return (
		<div
			className={cn(
				bg,
				'flex flex-col justify-between shrink-0 w-75 xs:w-100 sm:w-123.75 border border-border rounded-[10px] shadow-[0_-4px_4px_rgba(11,56,88,0.16)_inset]',
				border ? 'p-5 sm:p-7.5' : 'px-5 sm:px-7.5 pt-5 sm:pt-7.5'
			)}
		>
			{children}
		</div>
	)
}
