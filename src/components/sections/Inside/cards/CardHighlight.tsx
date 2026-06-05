import { CardWrapper } from './CardWrapper'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'
import { H3 } from '@/ui/base/Heading'

interface CardHighlightProps {
	number: string
	title: React.ReactNode
	description?: string
	descriptionTSX?: React.ReactNode
	imgUrl: string
	border?: boolean
}

export function CardHighlight({
	number,
	title,
	description,
	descriptionTSX,
	imgUrl,
	border = true
}: CardHighlightProps) {
	return (
		<CardWrapper
			bg='bg-gradient-card-highlight'
			border={border}
		>
			<div>
				<div className='flex items-start gap-1.25 sm:gap-2 mb-2 xs:mb-2.5'>
					<div className='bg-white pl-2.25 pr-2.5 py-1 rounded-[5px] font-display text-[25px] sm:text-[35px] tracking-[-0.02em] leading-none text-[#2664B0]'>
						{number}
					</div>
					<H3 addStyle='mt-1 leading-none'>{title}</H3>
				</div>

				{description && (
					<p className={cn(text.body, 'xs:max-w-87.5')}>{description}</p>
				)}

				{descriptionTSX && descriptionTSX}
			</div>

			<div
				className={cn(
					'w-full h-32 xs:h-50 sm:h-60',
					'mt-3.75 xs:mt-5',
					imgUrl,
					'bg-cover bg-center',
					border ? 'border border-border rounded-[10px]' : ''
				)}
			></div>
		</CardWrapper>
	)
}
