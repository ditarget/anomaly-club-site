import { PaymentForm } from '../../forms/payment-form/PaymentForm'

import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'

export function PaymentModal({ closeModal }: { closeModal: () => void }) {
	return (
		<div className='fixed inset-0 z-120 flex items-center justify-center'>
			{/* overlay */}
			<div className='absolute inset-0 bg-black/60' />

			{/* modal wrapper */}
			<div className='relative z-10 max-w-400 w-full m-0 md:m-5 max-h-[96vh] h-full rounded-[10px] overflow-hidden flex flex-col'>
				{/* background */}
				<div className="absolute inset-0 bg-[url('/background/img.jpg')] bg-cover bg-center blur-xl scale-130" />

				{/* header (НЕ скроллится) */}
				<div className='relative z-10 flex justify-end p-4'>
					<button
						onClick={closeModal}
						className='text-3xl text-[#757575] cursor-pointer'
					>
						✕
					</button>
				</div>

				{/* SCROLL AREA */}
				<div className='relative z-10 flex-1 overflow-y-auto px-5 xs:px-8 pb-10'>
					<div className='flex flex-col items-center md:items-start lg:flex-row gap-5 xs:gap-7.5 lg:justify-between max-w-270 mx-auto'>
						{/* left */}
						<div className='flex flex-col items-center md:items-start max-w-150 w-full space-y-4 xs:space-y-5 text-center md:text-left'>
							<h2 className='font-display text-[36px] md:text-[80px] leading-[1.1]'>
								Получить доступ
								<span className='text-highlight'> в&nbsp;Аномалию</span>
							</h2>

							<p className={cn(text.bodyLarge, 'max-w-75.5 xs:max-w-105 md:max-w-87.5')}>
								Введите телефон и&nbsp;email, чтобы&nbsp;перейти к&nbsp;оплате.
							</p>

							<p className={cn(text.bodyLarge, 'max-w-75.5 xs:max-w-105 md:max-w-87.5')}>
								После оплаты откроем доступ в&nbsp;закрытый Телеграм-канал
								и&nbsp;приложение Аномалии.
							</p>
						</div>

						{/* form */}
						<PaymentForm />
					</div>
				</div>
			</div>
		</div>
	)
}
