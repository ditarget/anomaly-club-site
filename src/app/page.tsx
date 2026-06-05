import { Inside } from '../components/sections/Inside/Inside'
import { Life } from '../components/sections/Life/Life'
import { Video } from '../components/sections/Video/Video'

import { Hero } from '@/src/components/sections/Hero/Hero'

export default function Home() {
	return (
		<main>
			<Hero />
			<Video />
			<Life />
			<Inside />
		</main>
	)
}
