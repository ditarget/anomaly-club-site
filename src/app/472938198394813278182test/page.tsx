'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'

export default function TestPage() {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className='h-200'>
			<button onClick={() => setIsOpen(true)}>
				Открыть
			</button>

			{isOpen &&
				createPortal(
					<div className='fixed inset-0 z-[9999] flex items-center justify-center bg-black/50'>
						<div className='relative bg-card p-6 rounded-xl'>
							<button
								onClick={() => setIsOpen(false)}
								className='absolute top-2 right-2'
							>
								✕
							</button>

							<h2>Тестовая модалка</h2>
						</div>
					</div>,
					document.body
				)}
		</div>
	)
}