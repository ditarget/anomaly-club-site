import { CardWrapper } from './CardWrapper'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'

interface CardBaseProps {
	title: string
	description?: string
	descriptionTSX?: React.ReactNode
	imgUrl: string
	border?: boolean
}

export function CardBase({
	title,
	description,
	descriptionTSX,
	imgUrl,
	border = true
}: CardBaseProps) {
	return (
		<CardWrapper border={border}>
			<div>
				<p className={cn(text.cardTitle, 'mb-2 xs:mb-2.5')}>{title}</p>

				{description && (
					<p className={cn(text.body, 'max-w-87.5 text-card-description')}>
						{description}
					</p>
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
