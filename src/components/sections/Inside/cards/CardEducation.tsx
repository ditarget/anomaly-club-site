import { CardWrapper } from './CardWrapper'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'

interface CardBaseProps {
	badge: string
	title: string
	description: string
	imgUrl: string
}

export function CardEducation({
	badge,
	title,
	description,
	imgUrl
}: CardBaseProps) {
	return (
		<CardWrapper>
			<div>
				<div
					className={cn(
						text.badge,
						'bg-card w-fit mb-1.25 xs:mb-2.5 px-4 py-1 xs:px-3.75 xs:py-2',
						'shadow-[0_2px_4px_rgba(11,56,88,0.16)_inset]',
						'border border-border rounded-[100px]'
					)}
				>
					{badge}
				</div>

				<div>
					<p className={cn(text.cardTitle, 'mb-2 xs:mb-2.5')}>{title}</p>

					<p className={cn(text.body, 'max-w-87.5 text-card-description')}>
						{description}
					</p>
				</div>
			</div>

			<div
				className={cn(
					'w-full h-32 xs:h-50 sm:h-60',
					'mt-3.75 xs:mt-5',
					imgUrl,
					'bg-cover bg-center',
					'border border-border rounded-[10px]'
				)}
			></div>
		</CardWrapper>
	)
}
