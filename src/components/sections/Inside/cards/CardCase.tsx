import { CardWrapper } from './CardWrapper'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'

export function CardCase() {
	return (
		<CardWrapper>
			<div>
				<p className={cn(text.cardTitle, 'mb-2 xs:mb-2.5 max-w-100')}>
					Кейс в&nbsp;десятке: рост до&nbsp;1&nbsp;млн в&nbsp;месяц
					и&nbsp;рекорд 3&nbsp;млн
				</p>

				<div className='flex items-center gap-2 xs:gap-3.75 my-2 xs:my-2.5'>
					<div
						className={cn(
							'shrink-0 w-20.5 xs:w-24.5 h-20.5 xs:h-24.5',
							'bg-[url("/images/desytka/anomaly-img-06.webp")] bg-cover bg-center',
							'border border-border rounded-[10px]'
						)}
					></div>

					<p className={cn(text.body, 'max-w-50 text-card-description')}>
						София пришла в&nbsp;Аномалию с&nbsp;магазином материалов
						для&nbsp;ногтевого сервиса и&nbsp;выручкой 300&nbsp;тыс.₽.
					</p>
				</div>

				<p
					className={cn(
						text.body,
						'max-w-100 text-card-description mb-2 xs:mb-2.5'
					)}
				>
					Десятка помогла сфокусироваться на&nbsp;опте, партнёрствах
					и&nbsp;новых направлениях.
				</p>

				<p
					className={cn(
						text.body,
						'max-w-100 text-card-description font-bold mb-2 xs:mb-2.5'
					)}
				>
					В&nbsp;итоге бизнес вырос до&nbsp;1&nbsp;млн&nbsp;₽ выручки
					в&nbsp;месяц, а&nbsp;рекорд достиг 3&nbsp;млн&nbsp;₽.
				</p>
			</div>
		</CardWrapper>
	)
}
