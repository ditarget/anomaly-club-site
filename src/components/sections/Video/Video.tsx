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
		<Section addStyle='md:flex-row gap-0 md:gap-5 my-17.5 sm:my-20'>
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
	)
}
