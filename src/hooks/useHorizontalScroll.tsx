import { useEffect, useRef } from 'react'

export function useHorizontalScroll<T extends HTMLElement>() {
	const ref = useRef<T>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return

		let isDragging = false
		let startX = 0
		let startScroll = 0

		const onMouseDown = (e: MouseEvent) => {
			isDragging = true
			startX = e.pageX
			startScroll = el.scrollLeft

			el.style.cursor = 'grabbing'
			el.style.userSelect = 'none'
		}

		const onMouseMove = (e: MouseEvent) => {
			if (!isDragging) return

			const dx = e.pageX - startX
			el.scrollLeft = startScroll - dx
		}

		const onMouseUp = () => {
			if (!isDragging) return

			isDragging = false
			el.style.cursor = 'grab'
			el.style.userSelect = ''
		}

		el.addEventListener('mousedown', onMouseDown)
		window.addEventListener('mousemove', onMouseMove)
		window.addEventListener('mouseup', onMouseUp)

		return () => {
			el.removeEventListener('mousedown', onMouseDown)
			window.removeEventListener('mousemove', onMouseMove)
			window.removeEventListener('mouseup', onMouseUp)
		}
	}, [])

	return ref
}