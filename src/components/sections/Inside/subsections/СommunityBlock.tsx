'use client'

import { CardBase } from '../cards/CardBase'
import { CardCTA } from '../cards/CardCTA'
import { CardCase } from '../cards/CardCase'
import { CardHighlight } from '../cards/CardHighlight'

import { useHorizontalScroll } from '@/src/hooks/useHorizontalScroll'

export function CommunityBlock() {
    const scrollRef = useHorizontalScroll<HTMLDivElement>()

    return (
        <div
            ref={scrollRef}
            className='overflow-x-auto overflow-y-hidden scrollbar-hide cursor-grab mt-7.5 sm:mt-12.5'
        >
            <div className='mx-auto max-w-400 px-5 lg:px-10'>
                <div className='flex text-left gap-2.5 xs:gap-5'>
                    <CardHighlight
                        number='04'
                        title={
                            <>
                                <span>Новые связи</span>
                                <br />
                                <span className='text-[18px] xs:text-[26px]'>
                                    с предпринимателями
                                </span>
                            </>
                        }
                        description='В приложении Аномалии есть раздел «Связи»&nbsp;– там&nbsp;можно находить предпринимателей под&nbsp;свои цели, нишу и&nbsp;город.'
                        imgUrl='bg-[url("/images/community/anomaly-img-16.png")] h-40 xs:h-60 sm:h-70'
                        border={false}
                    ></CardHighlight>

                    <CardBase
                        title='Как работает поиск'
                        description='Заполняете профиль, а&nbsp;приложение показывает людей с&nbsp;точками пересечения по&nbsp;задачам и&nbsp;возможной пользе.'
                        imgUrl='bg-[url("/images/community/anomaly-img-17.png")] h-52 xs:h-72 sm:h-82'
                        border={false}
                    ></CardBase>

                    <CardBase
                        title='Кейс: новый проект за&nbsp;4&nbsp;дня'
                        description='Виктория Спектор и&nbsp;Никита Константинов познакомились через «Связи» и&nbsp;начали проект на&nbsp;13&nbsp;млн.'
                        imgUrl='bg-[url("/images/community/anomaly-img-18.png")] h-52 xs:h-72 sm:h-82'
                        border={false}
                    ></CardBase>

                    <CardCTA
                        title='Приложение открывается после вступления'
                        description='После оплаты вы&nbsp;получаете доступ к&nbsp;приложению и&nbsp;можете сразу искать нужных людей.'
                    />
                    <div className='shrink-0 w-2.5 lg:w-5'></div>
                </div>
            </div>
        </div>
    )
}
