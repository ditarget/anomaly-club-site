'use client'

import { createContext, useEffect, useState } from 'react'
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

  // ✅ iOS SAFE scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
      document.body.style.touchAction = 'none'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
      document.body.style.touchAction = ''
    }
  }, [isOpen])

  return (
    <ModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}

      {isOpen && <PaymentModal closeModal={closeModal} />}
    </ModalContext.Provider>
  )
}