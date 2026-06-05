'use client'

import { CardEducation } from '../cards/CardEducation'
import { EducationBlockTitle } from '../cards/EducationBlockTitle'

import { useHorizontalScroll } from '@/src/hooks/useHorizontalScroll'

export function EducationBlock() {
	const scrollRef = useHorizontalScroll<HTMLDivElement>()

	return (
		<>
			<div className='w-full h-10 sm:h-12.5'></div>

			<div
				ref={scrollRef}
				className='overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab'
			>
				<div className='mx-auto max-w-400 px-5 lg:px-10'>
					<EducationBlockTitle />

					<div className='flex text-left gap-2.5 xs:gap-5 mt-5 sm:mt-7.5'>
						<CardEducation
							badge='Продажи и маркетинг'
							title='«Гребень Продаж»'
							description='11-часовое обучение Михаила Гребенюка о&nbsp;том, как&nbsp;выстроить высококонверсионный отдел продаж в&nbsp;компании.'
							imgUrl='bg-[url("/images/education/anomaly-img-07.webp")]'
						></CardEducation>

						<CardEducation
							badge='Ниша и продукт'
							title='«Выбор ниши»'
							description='1,5-часовое обучение Михаила Гребенюка о&nbsp;том, как&nbsp;выбрать нишу с&nbsp;деньгами, спросом и&nbsp;потенциалом роста, или&nbsp;усилить конфигурацию текущего бизнеса.'
							imgUrl='bg-[url("/images/education/anomaly-img-08.webp")]'
						></CardEducation>

						<CardEducation
							badge='Нейросети'
							title='«ИИ — продвинутый уровень. Опыт Askona»'
							description='Как перейти от&nbsp;«у&nbsp;меня есть&nbsp;GPT» к&nbsp;«GPT помогает принимать бизнес-решения»&nbsp;— на&nbsp;примере развития медицинской компании Михаила Гребенюка.'
							imgUrl='bg-[url("/images/education/anomaly-img-09.webp")]'
						></CardEducation>

						<CardEducation
							badge='Управление и команда'
							title='«Реальное управление. Уровень&nbsp;1»'
							description='Как управлять линейными сотрудниками через&nbsp;метрики, контроль и&nbsp;ответственность без&nbsp;микроменеджмента.'
							imgUrl='bg-[url("/images/education/anomaly-img-10.webp")]'
						></CardEducation>

						<CardEducation
							badge='Прибыль и финансы'
							title='«Основы финансов для&nbsp;предпринимателей»'
							description='Как через P&L, ДДС&nbsp;и&nbsp;финмодель видеть прибыль и&nbsp;не&nbsp;доводить бизнес до&nbsp;кассовых разрывов.'
							imgUrl='bg-[url("/images/education/anomaly-img-11.webp")]'
						></CardEducation>
						
						<CardEducation
							badge='Мышление и личная эффективность'
							title='6-й эфир НЕмикробизнес про ограничивающие установки'
							description='Эфир о&nbsp;том, как&nbsp;найти установки, которые тормозят рост, и&nbsp;переписать мышление под&nbsp;новый уровень решений.'
							imgUrl='bg-[url("/images/education/anomaly-img-12.webp")]'
						></CardEducation>

						<div className='shrink-0 w-2.5 lg:w-5'></div>
					</div>
				</div>
			</div>
		</>
	)
}
