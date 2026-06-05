'use client'

import { createContext, useState } from 'react'

import { PaymentModal } from '@/src/components/modals/payment-modal/PaymentModal'

type ModalContextType = {
	openModal: () => void
	closeModal: () => void
	isOpen: boolean
}

export const ModalContext = createContext<ModalContextType | null>(null)

export function ModalProvider({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false)

	const openModal = () => setIsOpen(true)
	const closeModal = () => setIsOpen(false)

	return (
		<ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
			{children}

			{/* MODAL */}
			{isOpen && <PaymentModal closeModal={closeModal} />}
		</ModalContext.Provider>
	)
}
