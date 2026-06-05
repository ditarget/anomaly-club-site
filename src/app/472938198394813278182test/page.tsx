'use client'

'use client'

import { useState } from 'react'

export default function TestPage() {
	const [text, setText] = useState('CLOSED')

	return (
		<div className='h-screen flex items-center justify-center flex-col gap-4'>
			<div className='text-2xl font-bold'>{text}</div>

			<button
				onClick={() => setText('OPEN')}
				className='px-4 py-2 bg-black text-white'
			>
				TEST
			</button>
		</div>
	)
}
