import { cn } from '@/src/utils/cn'

interface CardWrapperProps {
	bg?: string
	children: React.ReactNode
	hasBorder?: boolean
	hasResponsive?: boolean
}

export function CardWrapper({
	bg = 'bg-card',
	hasBorder = true,
	children,
	hasResponsive = false
}: CardWrapperProps) {
	return (
		<div
			className={cn(
				bg,
				hasResponsive ? 'w-full' : 'w-75 xs:w-100 sm:w-123.75',
				'flex flex-col justify-between shrink-0 border border-border rounded-[10px] shadow-[0_-4px_4px_rgba(11,56,88,0.16)_inset]',
				hasBorder ? 'p-5 sm:p-7.5' : 'px-5 sm:px-7.5 pt-5 sm:pt-7.5'
			)}
		>
			{children}
		</div>
	)
}
