'use client'

import { clsx } from 'clsx'

import { Logo } from '../ui/base/Logo'

import { useModal } from '@/src/hooks/useModal'

export function Header() {
	const { openModal } = useModal()

	return (
		<header
			className='
      max-w-400 w-full
      mx-auto px-5 pt-4 md:px-10 md:pt-6
      fixed top-0 left-0 right-0 z-100'
		>
			<div className='w-full flex justify-between items-center'>
				<div className='w-18 xs:w-33 h-auto py-2 pl-1.25 pr-2 bg-background rounded-md'>
					<a href='/'>
						<Logo />
					</a>
				</div>

				<button
					className={clsx(
						'bg-background',
						'outline-none hidden xs:block',
						'px-5 py-2',
						'border border-border rounded-[60px]',
						'font-sans font-medium text-[12px] xs:text-[14px]',
						'hover:bg-highlight hover:text-background',
						'transition-colors duration-300'
					)}
					onClick={openModal}
				>
					Присоединиться
				</button>
			</div>
		</header>
	)
}
