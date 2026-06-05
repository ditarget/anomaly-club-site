import type { Metadata } from 'next'

import { geometria, songer } from '@/src/styles/fonts'

import './globals.css'

export const metadata: Metadata = {
	title: 'Аномалия - сообщество для предпринимателей',
	description:
		'Аномалия - это сообщество для предпринимателей, которые хотят расти и развиваться. Мы предлагаем поддержку, ресурсы и возможности для нетворкинга, чтобы помочь вам достичь своих целей.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			className={`${geometria.variable} ${songer.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	)
}
