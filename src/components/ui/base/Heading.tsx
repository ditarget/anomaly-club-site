import { cn } from '@/src/utils/cn'

interface HeadingProps {
	addStyle?: string
	children: React.ReactNode
}

export function H1({ children }: HeadingProps) {
	return <h1 className='sr-only'>{children}</h1>
}

export function H2({ children, addStyle }: HeadingProps) {
	return (
		<h2
			className={cn(
				'font-display text-[36px] sm:text-[55px] tracking-[-0.02em] leading-[1.1]',
				addStyle
			)}
		>
			{children}
		</h2>
	)
}

export function H3({ children, addStyle }: HeadingProps) {
	return (
		<h3
			className={cn(
				'font-display text-[25px] sm:text-[35px] tracking-[-0.02em] leading-[1.1]',
				addStyle
			)}
		>
			{children}
		</h3>
	)
}
