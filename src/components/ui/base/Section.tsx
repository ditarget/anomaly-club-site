import { cn } from '@/src/utils/cn'

interface SectionProps {
	addStyle?: string
	children: React.ReactNode
}

export function Section({ children, addStyle }: SectionProps) {
	return (
		<section
			className={cn(
				'flex flex-col',
				'max-w-400 w-full h-full',
				'mx-auto px-5 md:px-10',
				addStyle
			)}
		>
			{children}
		</section>
	)
}
