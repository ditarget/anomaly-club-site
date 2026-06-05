'use client'

import { CardBase } from '../cards/CardBase'
import { CardCTA } from '../cards/CardCTA'
import { CardCase } from '../cards/CardCase'
import { CardHighlight } from '../cards/CardHighlight'

import { useHorizontalScroll } from '@/src/hooks/useHorizontalScroll'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'

export function EventsBlock() {
	const scrollRef = useHorizontalScroll<HTMLDivElement>()

	return (
		<div
			ref={scrollRef}
			className='overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab mt-7.5 sm:mt-12.5'
		>
			<div className='mx-auto max-w-400 px-5 lg:px-10'>
				<div className='flex text-left gap-2.5 xs:gap-5'>
					<CardHighlight
						number='05'
						title={
							<>
								<span>Мероприятия</span>
								<br />
								<span className='text-[18px] xs:text-[26px]'>
									в вашем городе
								</span>
							</>
						}
						descriptionTSX={
							<>
								<p className={cn(text.body, 'max-w-90 mb-2 xs:mb-2.5')}>
									Аномалия&nbsp;— это&nbsp;не&nbsp;только приложение
									и&nbsp;Телеграм-канал.
								</p>

								<p className={cn(text.body, 'max-w-90')}>
									В&nbsp;75+&nbsp;городах проходят живые встречи
									предпринимателей: нетворкинги, разборы
									и&nbsp;бизнес-экскурсии.
								</p>
							</>
						}
						imgUrl='bg-[url("/images/events/anomaly-img-19.webp")]'
					></CardHighlight>

					<CardBase
						title='Что дает офлайн'
						descriptionTSX={
							<>
								<p className={cn(text.body, 'max-w-100 mb-2 xs:mb-2.5')}>
									Офлайн быстрее превращает знакомства в партнёрства, клиентов,
									подрядчиков и новые идеи для бизнеса.
								</p>

								<p className={cn(text.body, 'max-w-100')}>
									Иногда один разговор с нужным человеком даёт больше,
									чем месяцы попыток решить всё самому.
								</p>
							</>
						}
						imgUrl='bg-[url("/images/events/anomaly-img-20.webp")]'
					></CardBase>

					<CardBase
						title='Доступ к&nbsp;сильным предпринимателям региона'
						descriptionTSX={
							<>
								<p className={cn(text.body, 'max-w-100 mb-2 xs:mb-2.5')}>
									В&nbsp;Аномалии проходят встречи с&nbsp;основателями
									и&nbsp;руководителями крупных компаний региона.
								</p>

								<p className={cn(text.body, 'max-w-100')}>
									Можно не&nbsp;просто послушать чужой опыт, а&nbsp;задать свой
									вопрос и&nbsp;увидеть, как&nbsp;опытные предприниматели решают
									похожие задачи.
								</p>
							</>
						}
						imgUrl='bg-[url("/images/events/anomaly-img-21.webp")]'
					></CardBase>

					<CardCTA
						title='Найдите движение в&nbsp;своём городе'
						description='После вступления вы&nbsp;сможете найти свой город, прийти на&nbsp;встречу и&nbsp;познакомиться с&nbsp;предпринимателями рядом.'
					/>
					<div className='shrink-0 w-2.5 lg:w-5'></div>
				</div>
			</div>
		</div>
	)
}
