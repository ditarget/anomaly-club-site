'use client'

import { useModal } from '@/src/hooks/useModal'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'
import { Button } from '@/ui/base/Button'
import { H2 } from '@/ui/base/Heading'
import { Section } from '@/ui/base/Section'

export function Life() {
	const { openModal } = useModal()

	return (
		<Section addStyle='items-center text-center my-17.5 sm:my-20'>
			<H2 addStyle='w-full'>
				Прямо сейчас в&nbsp;Аномалии
				<span className='block text-highlight text-[20px] text-left sm:text-center sm:text-[44px] mt-6 sm:-mt-1'>
					Челлендж «Выход на&nbsp;лям за&nbsp;лето»
				</span>
			</H2>

			<div className='flex flex-col md:flex-row w-full gap-0 md:gap-5 text-left mt-4 md:mt-10'>
				<div className={cn('flex-1 flex flex-col items-start', 'w-full')}>
					<p className={cn(text.bodyLarge, 'font-bold xs:text-[20px] mb-4 xs:mb-5')}>
						Три ключевых темы:
					</p>

					<div className='flex gap-1.25 w-full xs:gap-2 mb-4 xs:mb-5'>
						<div
							className={cn(
								text.list,
								'flex items-center justify-center bg-gradient-list font-medium text-background leading-[1.2] max-w-37 w-full h-16 py-3 rounded-[10px] text-center px-2'
							)}
						>
							<p className='max-w-30'>снижение расходов</p>
						</div>

						<div
							className={cn(
								text.list,
								'flex items-center justify-center bg-gradient-list font-medium text-background leading-[1.2] max-w-37 w-full h-16 py-3 rounded-[10px] text-center px-2.5'
							)}
						>
							<p className='max-w-30'>привлечение новых клиентов</p>
						</div>

						<div
							className={cn(
								text.list,
								'flex items-center justify-center bg-gradient-list font-medium text-background leading-[1.2] max-w-37 w-full h-16 py-3 rounded-[10px] text-center px-2.5'
							)}
						>
							<p className='max-w-30'>рост LTV</p>
						</div>
					</div>

					<p className={cn(text.bodyLarge, 'max-w-92.5 mb-6 md:mb-10')}>
						<b>Цель</b>&nbsp;— помочь аномальцам выйти на&nbsp;первый миллион
						чистой прибыли в&nbsp;месяц
					</p>

					<p className={cn(text.body, 'italic hidden md:block')}>
						Челлендж доступен только по подписке в Аномалии
					</p>
					
					<Button
						addStyle='hidden md:block mt-2.5'
						onClick={openModal}
					>
						Войти в Аномалию
					</Button>
				</div>

				<div className='flex-1 flex flex-col items-center md:items-start'>
					<div
						className={cn(
							'w-full aspect-2/1 md:aspect-auto md:h-full',
							'bg-[url("/images/anomaly-img-2.jpg")] bg-cover bg-center',
							'border border-border rounded-[10px]'
						)}
					></div>

					<p className={cn(text.body, 'w-full italic block md:hidden mt-3.5')}>
						Челлендж доступен только по подписке в Аномалии
					</p>

					<Button
						addStyle='block md:hidden mt-5'
						onClick={openModal}
					>
						Получить доступ
					</Button>

				</div>
			</div>
		</Section>
	)
}
