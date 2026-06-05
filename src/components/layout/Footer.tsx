import { clsx } from 'clsx'

import { Logo } from '../ui/base/Logo'

import { text } from '@/src/styles/text'

export function Footer() {
	return (
		<div className='bg-black w-full border-t border-border'>
			<footer className='py-4 pt-14 pb-19 max-w-400 w-full h-auto mx-auto px-5 md:px-10 flex flex-col sm:flex-row justify-between gap-8 sm:gap-5'>
				<div className='flex flex-col lg:flex-row max-w-185 w-full gap-8 lg:gap-5'>
					<div className='container'>
						<div className='w-43 container'>
							<Logo></Logo>
						</div>
					</div>

					<div className='space-y-4 container'>
						<p className={clsx(text.body, 'font-medium uppercase underline')}>Оферта</p>
						<p className={clsx(text.body, 'font-medium uppercase underline')}>
							Политика конфиденциальности
						</p>
						<p className={clsx(text.body, 'font-medium uppercase underline max-w-65 w-full')}>
							Правила использования приложения «Аномалия»
						</p>
					</div>
				</div>

				<div className='flex flex-col lg:flex-row max-w-185 w-full gap-8 lg:gap-5'>
					<p className={clsx(text.body, 'font-medium container')}>
						ИП Гребенюк Михаил Сергеевич
						<br />
						ИНН 772394411530
						<br />
						ОГРН 315774600443662
					</p>

					<p className={clsx(text.body, 'font-medium container')}>
						<a href='tel:+74951369596'>+7 (495) 136-95-96</a>
						<br />
						09559, Москва, Новороссийская 27
						<br />
						Время работы: 10:00–19:00
					</p>
				</div>
			</footer>
		</div>
	)
}
