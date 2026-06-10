'use client'

import { useModal } from '@/src/hooks/useModal'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'
import { Button } from '@/ui/base/Button'
import { H2 } from '@/ui/base/Heading'
import { Section } from '@/ui/base/Section'

export function Video() {
	const { openModal } = useModal()

	return (
		<div className='relative w-full overflow-visible'>
			{/* СЦЕНА */}
			<div
				className={cn(
					'absolute top-0 w-full aspect-[1800/1399] -z-20'
				)}
			>
				{/* ФОН */}
				<picture>
					<source
						media='(min-width: 640px)'
						srcSet='/background/anomaly-img-bg-2.jpg'
					/>

					<img
						src='/background/anomaly-img-bg-2.jpg'
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

			<Section addStyle='md:flex-row gap-0 md:gap-5 py-17.5 sm:py-20'>
				<div className='flex-1 w-full order-1 md:order-2 flex flex-col items-center text-center md:items-start md:text-left'>
					<H2>Посмотрите видео</H2>

					<p
						className={cn(
							text.bodyLarge,
							'w-55 xs:w-75 sm:w-77.5 mt-2 mb-7.5 sm:mt-2.5 sm:mb-5'
						)}
					>
						чтобы понять, как устроена Аномалия и&nbsp;нужно&nbsp;ли вам сюда
					</p>

					<Button
						addStyle='hidden md:block'
						onClick={openModal}
					>
						Войти в Аномалию
					</Button>
				</div>

				<div className='flex-1 min-w-0 flex flex-col items-center text-center w-full order-2 md:order-1'>
					<div className='flex items-center justify-center bg-black w-full border border-border rounded-[10px]'>
						<div
							style={{
								position: 'relative',
								paddingTop: '56.25%',
								width: '100%'
							}}
						>
							<iframe
								src='https://kinescope.io/embed/tH6cpxTpxaNf5cWKtwKinM'
								allow='autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;'
								frameBorder={0}
								allowFullScreen
								style={{
									position: 'absolute',
									width: '100%',
									height: '100%',
									top: 0,
									left: 0
								}}
							/>
						</div>
					</div>

					<Button
						addStyle='block md:hidden mt-5'
						onClick={openModal}
					>
						Войти в Аномалию
					</Button>
				</div>
			</Section>
		</div>
	)
}
