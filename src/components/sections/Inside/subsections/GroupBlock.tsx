'use client'

import { CardBase } from '../cards/CardBase'
import { CardCTA } from '../cards/CardCTA'
import { CardCase } from '../cards/CardCase'
import { CardHighlight } from '../cards/CardHighlight'

import { useHorizontalScroll } from '@/src/hooks/useHorizontalScroll'

export function GroupBlock() {
	const scrollRef = useHorizontalScroll<HTMLDivElement>()

	return (
		<div
			ref={scrollRef}
			className='overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab mt-7.5 sm:mt-10'
		>
			<div className='mx-auto max-w-400 px-5 lg:px-10'>
				<div className='flex text-left gap-2.5 xs:gap-5'>
					<CardHighlight
						number='01'
						title='Ваша десятка'
						description='Группа развития предпринимателей, которые помогают друг другу достигать целей в&nbsp;бизнесе.'
						imgUrl='bg-[url("/images/desytka/anomaly-img-03.webp")]'
					></CardHighlight>

					<CardBase
						title='Как работает десятка'
						description='У каждой команды есть капитан: он&nbsp;собирает участников на&nbsp;регулярные встречи, ведёт встречи и&nbsp;держит фокус на&nbsp;результате.'
						imgUrl='bg-[url("/images/desytka/anomaly-img-04.webp")]'
					></CardBase>

					<CardBase
						title='Что вы получаете в&nbsp;десятке'
						description='Вы приносите свои задачи и&nbsp;разбираете их&nbsp;через опыт группы: видите риски, находите точки усиления и&nbsp;быстрее понимаете следующий шаг.'
						imgUrl='bg-[url("/images/desytka/anomaly-img-05.webp")]'
					></CardBase>

					<CardCase />

					<CardCTA
						title='Найдите свою десятку'
						description='Присоединяйтесь к&nbsp;готовой десятке или&nbsp;собирайте свою команду предпринимателей внутри Аномалии.'
					></CardCTA>
					<div className='shrink-0 w-2.5 lg:w-5'></div>
				</div>
			</div>
		</div>
	)
}
