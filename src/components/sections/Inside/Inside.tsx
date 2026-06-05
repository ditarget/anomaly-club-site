'use client'

import { AnalysisBlock } from './subsections/AnalysisBlock'
import { EducationBlock } from './subsections/EducationBlock'
import { GroupBlock } from './subsections/GroupBlock'
import { H2 } from '@/ui/base/Heading'
import { Section } from '@/ui/base/Section'
import { CommunityBlock } from './subsections/СommunityBlock'
import { EventsBlock } from './subsections/EventsBlock'

export function Inside() {
	return (
		<Section addStyle='max-w-[100%] w-full text-center my-17.5 sm:my-20 px-0 md:px-0'>
			<H2 addStyle='w-full'>
				Что внутри <span className='text-highlight'>Аномалии</span>{' '}
			</H2>

			<GroupBlock />
			<EducationBlock />
			<AnalysisBlock />
			<CommunityBlock />
			<EventsBlock />
		</Section>
	)
}
