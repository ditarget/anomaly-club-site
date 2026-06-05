'use client'

import { useRef, useState } from 'react'

export default function TestPage() {
	const [text, setText] = useState('CLOSED')

	// блокировка двойного срабатывания
	const lockRef = useRef(false)

	const runOnce = () => {
		if (lockRef.current) return

		lockRef.current = true
		setText('OPEN')

		// разблокируем после короткого окна жеста
		setTimeout(() => {
			lockRef.current = false
		}, 600)
	}

	return (
		<div className="h-screen flex items-center justify-center">
			<button
				onTouchStart={(e) => {
					e.preventDefault()
					runOnce()
				}}
				onClick={(e) => {
					e.preventDefault()
					runOnce()
				}}
				className="px-6 py-3 bg-black text-white"
			>
				TOGGLE
			</button>

			<div className="absolute top-10 text-3xl font-bold">
				{text}
			</div>
		</div>
	)
}