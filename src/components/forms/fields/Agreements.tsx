'use client'

import Image from 'next/image'
import type { ControllerRenderProps, FieldValues } from 'react-hook-form'
import { useFormContext } from 'react-hook-form'

import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'
import { FormControllerField } from '@/ui/form/FormControllerField'

export function Agreements() {
	const agreement1 = 'agree_privacy_policy'
	const agreement2 = 'agree_offers'

	const {
		formState: { errors }
	} = useFormContext()

	const error1 = errors?.[agreement1]?.message as string | undefined
	const error2 = errors?.[agreement2]?.message as string | undefined

	const checkboxStyle =
		'appearance-none w-4 h-4 rounded-[2px] border border-border/80 bg-none focus:outline-none transition'

	const renderCheckbox = <T extends FieldValues>(
		field: ControllerRenderProps<T, any>,
		content: React.ReactNode
	) => {
		const { onChange, onBlur, name, ref, value, disabled } = field

		return (
			<label className='flex items-start gap-2 cursor-pointer'>
				<div className='relative w-4 h-4'>
					<input
						type='checkbox'
						onChange={e => onChange(e.target.checked)}
						onBlur={onBlur}
						name={name}
						ref={ref}
						disabled={disabled}
						checked={!!value}
						className={checkboxStyle}
					/>

					{!!value && (
						<Image
							src='/check.svg'
							alt='check'
							className='absolute top-0 left-0 w-4 h-4 pointer-events-none'
							width={16}
							height={16}
						/>
					)}
				</div>

				<span className={cn(text.agreements, 'font-medium text-[#A3A3A3]')}>
					{content}
				</span>
			</label>
		)
	}

	return (
		<div className='flex flex-col text-sm leading-5 mb-1 xs:mb-3.5'>
			<FormControllerField
				variant={agreement1}
				hasError={error1}
				rules={{ required: 'Необходимо согласие' }}
				render={field =>
					renderCheckbox(
						field,
						<>
							Я ознакомлен и&nbsp;соглашаюсь с&nbsp;условиями{' '}
							<a
								href='https://anomalya.ru/anomaly_privacy_policy'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-400 font-medium'
							>
								Политики конфиденциальности
							</a>{' '}
							и даю{' '}
							<a
								href='https://anomalya.ru/anomaly_reklama'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-400 font-medium'
							>
								Согласие на&nbsp;получение рекламной рассылки
							</a>
						</>
					)
				}
			/>

			<FormControllerField
				variant={agreement2}
				hasError={error2}
				rules={{ required: 'Необходимо согласие' }}
				render={field =>
					renderCheckbox(
						field,
						<>
							Я ознакомлен и&nbsp;соглашаюсь с&nbsp;условиями{' '}
							<a
								href='https://anomalya.ru/anomaly_oferta'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-400 font-medium'
							>
								Оферты
							</a>
						</>
					)
				}
			/>
		</div>
	)
}
