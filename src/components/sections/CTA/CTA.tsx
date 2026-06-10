'use client'

import { useModal } from '@/src/hooks/useModal'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'
import { Button } from '@/ui/base/Button'
import { H2 } from '@/ui/base/Heading'
import { Section } from '@/ui/base/Section'

export function CTA() {
	const { openModal } = useModal()

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
			<Section addStyle='relative z-10 items-center text-center py-17.5 sm:py-20 overflow-visible'>
				<div className='max-w-600 w-full mx-auto'>
					<H2 addStyle='w-full md:text-[80px]'>
						Аномалия вашего&nbsp;бизнеса <br />
						<span className='text-highlight'>начинается здесь</span>
					</H2>

					<Button
						addStyle='mt-7.5 xs:mt-10'
						onClick={openModal}
					>
						Оформить подписку
					</Button>

					<p className={cn(text.body, 'font-medium mt-2.5 mt-5')}>
						Всего за&nbsp;5 000&nbsp;₽ в&nbsp;месяц
					</p>
				</div>
			</Section>
		</div>
	)
}
