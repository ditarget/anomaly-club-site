'use client'

import { type RefObject, useEffect, useRef } from 'react'

export function useClickOutside(refs: RefObject<HTMLDivElement | null>[], handler: () => void) {
	const handlerRef = useRef(handler)
	handlerRef.current = handler

	useEffect(() => {
		const listener = (event: MouseEvent | TouchEvent) => {
			if (refs.every(ref => ref.current && !ref.current.contains(event.target as Node))) {
				handlerRef.current()
			}
		}
		document.addEventListener('mousedown', listener)
		document.addEventListener('touchstart', listener)

		return () => {
			document.removeEventListener('mousedown', listener)
			document.removeEventListener('touchstart', listener)
		}
	}, [refs])
}
