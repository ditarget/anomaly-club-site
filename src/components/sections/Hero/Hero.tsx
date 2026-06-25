'use client'

import { clsx } from 'clsx'

import { Section } from '../../ui/base/Section'

import { H1 } from '@/src/components/ui/base/Heading'
import { Logo } from '@/src/components/ui/base/Logo'
import { useModal } from '@/src/hooks/useModal'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'

export function Hero() {
	const { openModal } = useModal()

	return (
		<div className='relative mx-auto max-w-500 w-full h-175 sm:h-[90vh] overflow-hidden rounded-b-[10px]'>
			<picture>
				<source
					media='(min-width: 730px)'
					srcSet='/background/anomaly-img-main.webp'
				/>

				<img
					src='/background/img-mobile.webp'
					alt=''
					className='absolute inset-0 z-0 h-full w-full object-[calc(50%+1px)_60%] xs:object-[calc(50%+20px)_center] object-cover'
				/>
			</picture>

			{/* Content */}
			<div className='relative z-20 h-full'>
				<Section>
					<H1>Аномалия - сообщество для предпринимателей</H1>

					<div className='flex justify-between mt-30'>
						<div className='w-58 sm:w-142 h-auto'>
							<Logo fill='#B6F5FF' />
						</div>

						<div className='hidden lg:flex flex-col justify-between items-end'>
							<FeaturesList />
						</div>
					</div>

					<div className='mt-auto'>
						<div className='bg-card/84 max-w-110 w-full mb-5 p-6 border border-border rounded-[10px] backdrop-blur-[66px]'>
							<p className={clsx(text.body, 'mb-4 lg:mb-5')}>
								Получите доступ к&nbsp;сообществу предпринимателей,
								где&nbsp;рост создаётся через&nbsp;сильное окружение, работу
								в&nbsp;мини-группах и&nbsp;прикладные обучения
							</p>

							<div className='block lg:hidden'>
								<p className={clsx(text.body, 'mb-5 font-bold')}>
									75+ городов. 200+ обучающих программ.
									<br />
									Разборы с Михаилом Гребенюком.
								</p>
							</div>

							<button
								type='button'
								className={clsx(
									'relative bg-gradient-button bg-gradient-button:hover w-full h-12 xs:h-14 rounded-[60px] text-[#071638] pl-5 pr-1.5 py-1.5 overflow-hidden',
									text.buttonText
								)}
								onClick={openModal}
							>
								<div className='flex justify-between items-center h-full relative z-10'>
									<p className='pt-0.5'>Получить доступ</p>

									<div className='bg-[#071638] aspect-square h-full flex items-center rounded-[60px]'>
										<img
											src='/arrow.svg'
											alt='Arrow'
											className='block m-auto'
										/>
									</div>
								</div>

								<div
									className={cn(
										'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
										'w-[90%] h-[105%]',
										'rounded-[60px] bg-gradient-button',
										'opacity-40 blur-md pointer-events-none',
										'z-0'
									)}
								/>
							</button>

							<p className={clsx(text.caption, 'mt-4 font-medium')}>
								Всего за&nbsp;5 000&nbsp;₽ в&nbsp;месяц
							</p>
						</div>
					</div>
				</Section>
			</div>
		</div>
	)
}

function FeaturesList() {
	return (
		<>
			<div className={clsx(text.body, 'font-bold')}>75+ городов</div>
			<div className={clsx(text.body, 'font-bold')}>
				200+ обучающих программ
			</div>
			<div className={clsx(text.body, 'font-bold')}>
				Разборы с Михаилом Гребенюком
			</div>
		</>
	)
}
