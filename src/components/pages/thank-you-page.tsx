'use client'

import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'
import { H2 } from '@/ui/base/Heading'
import { Section } from '@/ui/base/Section'

export function ThankYouPage() {
	return (
		<div className='relative w-full overflow-visible'>
			{/* СЦЕНА */}
			<div className='absolute bottom-0 w-full aspect-[640/360] sm:aspect-[1800/896] -z-20'>
				<picture>
					<source
						media='(min-width: 640px)'
						srcSet='/background/anomaly-img-bg-7.jpg'
					/>

					<img
						src='/background/anomaly-img-bg-mobile-7.jpg'
						loading='lazy'
						decoding='async'
						alt=''
						className='absolute inset-0 w-full h-full object-cover object-center'
					/>
				</picture>

				<div className='absolute inset-0 bg-[url("/background/noise-3.png")] bg-repeat pointer-events-none' />
			</div>

			{/* КОНТЕНТ */}
			<Section addStyle='relative z-10 py-30 sm:py-40'>
				<div className='max-w-600 w-full mx-auto flex flex-col items-center text-center'>
					<H2 addStyle='w-full md:text-[80px]'>
						Добро пожаловать в&nbsp;Аномалию
					</H2>

					<p className={cn(text.bodyLarge, 'mt-5 mb-10')}>
						Доступ к&nbsp;Аномалии уже&nbsp;открыт. <br />
						Осталось&nbsp;перейти в&nbsp;Телеграм-канал и&nbsp;скачать
						приложение
					</p>

					{/* BUTTONS */}
					<div className='flex flex-col lg:flex-row gap-5 mb-16 w-full items-center justify-center'>
						<a
							href='https://t.me/anomaly_grebenuk_bot?start=payment_site'
							target='_blank'
							rel='noopener noreferrer'
							className={cn(
								'flex items-center justify-center w-full max-w-87.5 h-16 rounded-[60px]',
								'bg-linear-to-b from-[#35ADE1] to-[#1F95D3]',
								'border border-border',
								text.buttonText,
								'text-[13px]'
							)}
						>
							<span className='pt-0.5'>Перейти в Телеграм канал</span>
						</a>

						<a
							href='https://anomalya.online/download'
							target='_blank'
							rel='noopener noreferrer'
							className={cn(
								'flex items-center justify-center w-full max-w-87.5 h-16 rounded-[60px]',
								'bg-linear-to-b from-[#000000] to-[#123C89]',
								'border border-border',
								text.buttonText,
								'text-[13px]'
							)}
						>
							<span className='pt-0.5'>Скачать приложение</span>
						</a>
					</div>

					{/* CARD */}
					<div
						className={cn(
							'bg-card space-y-3 w-fit mx-auto p-5 sm:p-7.5 border border-border rounded-[10px]',
							text.bodyLarge
						)}
					>
						<p className='max-w-120'>
							Если возникнут технические проблемы с&nbsp;доступом, проверьте
							почту: ссылка также пришла туда
						</p>

						<p className='max-w-120 font-bold'>
							По вопросам пишите в&nbsp;
							<a
								href='https://t.me/anomaly_sz_bot'
								target='_blank'
								rel='noopener noreferrer'
								className='underline'
							>
								Службу Заботы
							</a>
						</p>
					</div>
				</div>
			</Section>
		</div>
	)
}
