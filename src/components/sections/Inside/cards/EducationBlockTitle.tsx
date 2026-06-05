import { CardWrapper } from './CardWrapper'
import { text } from '@/src/styles/text'
import { cn } from '@/src/utils/cn'
import { H3 } from '@/ui/base/Heading'

export function EducationBlockTitle() {
	return (
		
			<div className='flex text-left gap-2.5 xs:gap-5'>
				<div
					className={cn(
						'flex flex-col justify-end shrink-0 w-75 xs:w-100 sm:w-123.75 px-5 sm:px-7.5'
					)}
				>
					<div className='flex items-center gap-1.25 sm:gap-2 mb-2 xs:mb-2.5'>
						<div className='bg-white pl-2.25 pr-2.5 py-1 rounded-[5px] font-display text-[25px] sm:text-[35px] tracking-[-0.02em] leading-none text-[#2664B0]'>
							02
						</div>
						<H3>Обучения и эфиры</H3>
					</div>

					<p className={cn(text.body, 'xs:max-w-87.5 text-card-description')}>
						Короткие и&nbsp;прикладные материалы под&nbsp;разные&nbsp;задачи
						бизнеса
					</p>
				</div>

				<div
					className={cn(
						'flex flex-col justify-end shrink-0 w-75 xs:w-100 sm:w-123.75 px-5 sm:px-7.5'
					)}
				>
					<p className={cn(text.body, 'text-card-description')}>
						Сможете обучаться в&nbsp;нашем приложении Аномалии,
						с&nbsp;возможностью просмотра без VPN и&nbsp;интернета
					</p>
				</div>
			</div>
		
	)
}
