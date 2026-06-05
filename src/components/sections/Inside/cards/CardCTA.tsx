import { CardWrapper } from './CardWrapper'
import { useModal } from '@/src/hooks/useModal'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'
import { Button } from '@/ui/base/Button'

interface CardCTAProps {
	title: string
	description?: string
	descriptionTSX?: React.ReactNode
}

export function CardCTA({ title, description, descriptionTSX }: CardCTAProps) {
	const { openModal } = useModal()

	return (
		<CardWrapper bg='bg-gradient-card-cta'>
			<div>
				<p className={cn(text.cardTitle, 'mb-2 xs:mb-2.5')}>{title}</p>

				{description && (
					<p className={cn(text.body, 'max-w-87.5 text-card-description')}>
						{description}
					</p>
				)}

				{descriptionTSX && descriptionTSX}

				<Button
					addStyle='mt-5 sm:mt-7.5'
					onClick={openModal}
				>
					Вступить в Аномалию
				</Button>
			</div>
		</CardWrapper>
	)
}
