'use client'

import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'
import { H2 } from '@/ui/base/Heading'
import { Section } from '@/ui/base/Section'

export function ThankYouPage() {
	return (
		<div className='relative w-full overflow-visible'>
			{/* СЦЕНА */}
			<div
				className={cn(
					'absolute bottom-0 w-full aspect-[640/360] sm:aspect-[1800/896] -z-20'
				)}
			>
				{/* ФОН */}
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

				{/* ШУМ */}
				<div
					className={cn(
						'absolute inset-0',
						'bg-[url("/background/noise-3.png")]',
						'bg-repeat',
						'opacity-100',
						'pointer-events-none'
					)}
				/>
			</div>

			{/* КОНТЕНТ */}
			<Section addStyle='relative z-10 items-center text-center py-30 sm:py-40 overflow-visible'>
				<div className='max-w-600 w-full mx-auto'>
					<H2 addStyle='w-full md:text-[80px]'>
						Добро пожаловать в&nbsp;Аномалию
					</H2>

					<p className={cn(text.bodyLarge, 'mt-2.5 xs:mt-5 mb-7.5 xs:mb-10')}>
						Доступ к&nbsp;Аномалии уже&nbsp;открыт. <br />
						Осталось&nbsp;перейти в&nbsp;Телеграм-канал и&nbsp;скачать
						приложение
					</p>

					<div className='text-foreground w-full flex flex-col lg:flex-row gap-2.5 lg:gap-5 justify-center mb-7.5 xs:mb-16'>
						<a
							href='https://t.me/anomaly_grebenuk_bot?start=payment_site'
							target='_blank'
							rel='noopener noreferrer'
							className={cn(
								'flex items-center justify-center w-full max-w-87.5 h-16 mx-auto lg:mx-0 rounded-[60px]',
								'bg-linear-to-b from-[#35ADE1] to-[#1F95D3]',
								'border border-border',
								text.buttonText,
								'text-[13px]'
							)}
						>
							<span className='pt-0.5'>Перейти в&nbsp;Телеграм канал</span>
						</a>

						<a
							href='https://anomalya.online/download'
							target='_blank'
							rel='noopener noreferrer'
							className={cn(
								'flex items-center justify-center',
								'w-full max-w-87.5 h-16 mx-auto lg:mx-0 ',
								'rounded-[60px] border border-border',
								'bg-linear-to-b from-[#000000] to-[#123C89]',
								'text-foreground',
								text.buttonText,
								'text-[13px]'
							)}
						>
							<span className='pt-0.5'>Скачать приложение</span>
						</a>
					</div>

					<div
						className={cn(
							'bg-card space-y-2.5 xs:space-y-3.75 w-fit mx-auto p-5 sm:p-7.5 border border-border rounded-[10px]',
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
							>
								<u>Службу Заботы</u>
							</a>
						</p>
					</div>
				</div>
			</Section>
		</div>
	)
}
