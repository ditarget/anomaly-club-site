'use client'

import { CardBase } from '../cards/CardBase'
import { CardCTA } from '../cards/CardCTA'

import { CardHighlight } from '../cards/CardHighlight'

import { useHorizontalScroll } from '@/src/hooks/useHorizontalScroll'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'

export function AnalysisBlock() {
	const scrollRef = useHorizontalScroll<HTMLDivElement>()

	return (
		<div
			ref={scrollRef}
			className='overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab mt-7.5 sm:mt-12.5'
		>
			<div className='mx-auto max-w-400 px-5 lg:px-10'>
				<div className='flex text-left gap-2.5 xs:gap-5'>
					<CardHighlight
						number='03'
						title={
							<>
								<span>Разборы бизнеса</span>
								<br />
								<span className='text-[18px] xs:text-[26px]'>
									от Михаила Гребенюка
								</span>
							</>
						}
						description='Регулярные эфиры в&nbsp;Аномалии, где&nbsp;Михаил разбирает реальные бизнесы участников.'
						imgUrl='bg-[url("/images/analisis/anomaly-img-13.webp")]'
					></CardHighlight>

					<CardBase
						title='Как это работает'
						description='Участник приносит свой запрос, а&nbsp;Михаил показывает, где&nbsp;бизнес  теряет деньги, скорость и&nbsp;рост. На&nbsp;выходе&nbsp;— конкретные решения, которые можно внедрять сразу.'
						imgUrl='bg-[url("/images/analisis/anomaly-img-14.webp")]'
					></CardBase>

					<CardBase
						title='Уже доступно 150+&nbsp;нишевых разборов'
						description='В&nbsp;базе Аномалии&nbsp;— более 150&nbsp;эфиров по&nbsp;разным нишам и&nbsp;бизнес-моделям. Находите похожий кейс и&nbsp;забираете готовую логику решения.'
						imgUrl='bg-[url("/images/analisis/anomaly-img-15.webp")]'
					></CardBase>

					<CardCTA
						title='Получите взгляд Михаила на&nbsp;свой бизнес'
						descriptionTSX={
							<>
								<p
									className={cn(
										text.body,
										'max-w-100 text-card-description mb-2 xs:mb-2.5'
									)}
								>
									Вступайте в&nbsp;Аномалию, приходите на&nbsp;эфиры и&nbsp;задавайте свой вопрос.
								</p>

								<p
									className={cn(
										text.body,
										'max-w-100 text-card-description'
									)}
								>
									Или смотрите готовые разборы и&nbsp;забирайте решения для&nbsp;своего бизнеса.
								</p>
							</>
						}
					/>
					<div className='shrink-0 w-2.5 lg:w-5'></div>
				</div>
			</div>
		</div>
	)
}
