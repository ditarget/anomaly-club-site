import { cn } from '@/src/utils/cn'

interface ButtonProps {
	size?: 'small' | 'medium' | 'large'
	type?: 'button' | 'submit' | 'reset'
	addStyle?: string
	children: React.ReactNode
	onClick?: () => void
}

const baseTextStyle = 'uppercase tracking-[0.11em] font-bold'

const buttonSizes = {
	small: 'w-30 xs:w-35 h-7 xs:h-8 text-[8px] xs:text-[10px]',
	medium: 'w-60 xs:w-72.5 h-12 xs:h-14 text-[13px] xs:text-[16px]',
	large: 'w-60 xs:w-87.5 h-12 xs:h-16 text-[14px] xs:text-[18px]'
}

export function Button({
	children,
	size = 'medium',
	type = 'button',
	addStyle,
	onClick
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			className={cn(
				'relative',
				'bg-gradient-button',
				buttonSizes[size],
				'pl-5 pr-5 py-1.5',
				'rounded-[60px]',
				'text-[#071638]',
				baseTextStyle,
				addStyle
			)}
		>
			<div className='flex justify-center items-center h-full w-full relative z-10'>
				<span className='pt-0.5'>{children}</span>
			</div>

			{/* glow layer */}
			<div
				className={cn(
					'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2w-[90%]h-[105%]',
					'rounded-[60px] bg-gradient-button',
					'opacity-40 blur-md pointer-events-none'
				)}
			/>
		</button>
	)
}
