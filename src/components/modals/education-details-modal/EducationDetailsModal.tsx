import { useEffect } from 'react'

import { CardEducation } from '../../sections/Inside/cards/CardEducation'

import { type EducationKey, educationDetailsData } from './educationDetailsData'
import { useModal } from '@/src/hooks/useModal'
import { cn } from '@/src/utils/cn'
import { Button } from '@/ui/base/Button'

interface EducationDetailsProps {
	selectedEducation: EducationKey | null
	closeModal: () => void
}

export function EducationDetailsModal({
	selectedEducation,
	closeModal
}: EducationDetailsProps) {
	const data = selectedEducation
		? educationDetailsData[selectedEducation]
		: null

	const { openModal } = useModal()

	const openPaymentModal = () => {
		openModal()
		closeModal()
	}

	useEffect(() => {
		const prevOverflow = document.body.style.overflow
		document.body.style.overflow = 'hidden'

		return () => {
			document.body.style.overflow = prevOverflow
		}
	}, [])

	return (
		<div className='fixed inset-0 z-120 flex items-center justify-center'>
			{/* overlay */}
			<div className='absolute inset-0 bg-black/60' />

			{/* modal wrapper */}
			<div className='relative z-10 max-w-400 w-full m-0 md:m-5 max-h-[96vh] h-full rounded-[10px] overflow-hidden flex flex-col bg-background border border-border'>
				{/* BACKGROUND */}
				<div
					className={cn(
						"absolute inset-0 z-0 bg-[url('/background/anomaly-img-bg-2.jpg')] bg-cover bg-center rotate-180",
						'transition-opacity duration-500',
						'opacity-0 animate-fadeIn'
					)}
				/>

				{/* header (НЕ скроллится) */}
				<div className='relative z-20 flex justify-between p-4 animate-contentIn pl-7.5'>
					<Button onClick={openPaymentModal}>Получить доступ</Button>

					<button
						onClick={closeModal}
						className='text-3xl text-[#757575]'
					>
						✕
					</button>
				</div>

				{/* SCROLL AREA */}
				<div className='scrollbar-new relative z-10 overflow-y-auto px-5 xs:px-8 pb-10 animate-contentIn text-left gap-2.5 xs:gap-5 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 pt-7.5'>
					{data &&
						data.map(data => (
							<CardEducation
								key={data.id}
								badge={data.badge}
								title={data.title}
								description={data.description}
								imgUrl={data.image}
								hasResponsive={true}
							></CardEducation>
						))}
				</div>
			</div>
		</div>
	)
}
