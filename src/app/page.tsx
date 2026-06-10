import { CTA } from '../components/sections/CTA/CTA'
import { Hero } from '../components/sections/Hero/Hero'
import { Inside } from '../components/sections/Inside/Inside'
import { Life } from '../components/sections/Life/Life'
import { Video } from '../components/sections/Video/Video'

export default function Home() {
	return (
		<main>
			<Hero />
			<Video />
			<Life />
			<Inside />
			<CTA />
		</main>
	)
}
