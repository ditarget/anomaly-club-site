import localFont from 'next/font/local'

export const geometria = localFont({
	src: [
		{
			path: '../../public/fonts/Geometria/geometria.woff2',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Geometria/geometria-medium.woff2',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Geometria/geometria-bold.woff2',
			weight: '700',
			style: 'normal'
		},
		{
			path: '../../public/fonts/Geometria/geometria-italic.woff2',
			weight: '400',
			style: 'italic'
		}
	],
	variable: '--font-geometria',
	display: 'swap'
})

export const songer = localFont({
	src: [
		{
			path: '../../public/fonts/Songer/songercondensed.woff2',
			weight: '400',
			style: 'normal'
		}
	],
	variable: '--font-songer',
	display: 'swap'
})
