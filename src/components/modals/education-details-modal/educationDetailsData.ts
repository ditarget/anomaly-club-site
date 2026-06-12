export interface EducationCourse {
	id: number
	badge: string
	title: string
	description: string
	image: string
}

export type EducationKey =
	| 'marketing'
	| 'niche'
	| 'ai'
	| 'team'
	| 'finance'
	| 'mind'

export type IEducationDetailsData = {
	marketing: EducationCourse[]
	niche: EducationCourse[]
	ai: EducationCourse[]
	team: EducationCourse[]
	finance: EducationCourse[]
	mind: EducationCourse[]
}

export const educationDetailsData: IEducationDetailsData = {
	marketing: [
		{
			id: 1,
			badge: 'Продажи и маркетинг',
			title: '«Гребень Продаж»',
			description:
				'11-часовое обучение Михаила Гребенюка о\u00A0том,\u00A0как выстроить высококонверсионный отдел продаж в\u00A0компании.',
			image: 'bg-[url("/images/education/anomaly-img-07.webp")]'
		},
		{
			id: 2,
			badge: 'Продажи и маркетинг',
			title: '9-й эфир НЕмикробизнес «Как\u00A0сделать\u00A0перелидоз»',
			description:
				'Эфир о\u00A0том, как забирать больше клиентов с\u00A0рынка и\u00A0понимать показатели, которые ведут к\u00A0росту.',
			image: 'bg-[url("/images/courses/anomaly-img-22.webp")]'
		},
		{
			id: 3,
			badge: 'Продажи и маркетинг',
			title: '«Геомаркетинг для\u00A0предпринимателей»',
			description:
				'Как получать клиентов с\u00A0Яндекс.Карт, 2ГИС и\u00A0других геосервисов даже без\u00A0большого рекламного бюджета.',
			image: 'bg-[url("/images/courses/anomaly-img-23.webp")]'
		},
		{
			id: 4,
			badge: 'Продажи и маркетинг',
			title:
				'8-й эфир НЕмикробизнес «Как\u00A0настроить\u00A0продажи и\u00A0увеличить количество сделок»',
			description:
				'Эфир о\u00A0простых механиках роста продаж и\u00A0прибыли из\u00A0текущей клиентской базы.',
			image: 'bg-[url("/images/courses/anomaly-img-24.webp")]'
		},
		{
			id: 5,
			badge: 'Продажи и маркетинг',
			title: '«Реклама в Telegram Ads»',
			description:
				'Как тестировать Telegram Ads с\u00A0минимальным бюджетом, находить рабочие связки и\u00A0масштабироваться без\u00A0слива денег.',
			image: 'bg-[url("/images/courses/anomaly-img-25.webp")]'
		},
		{
			id: 6,
			badge: 'Продажи и маркетинг',
			title: '«Маркетинг для\u00A0предпринимателя»',
			description:
				'Как видеть маркетинг системно, находить точки потерь и\u00A0контролировать подрядчиков.',
			image: 'bg-[url("/images/courses/anomaly-img-26.webp")]'
		},
		{
			id: 7,
			badge: 'Продажи и маркетинг',
			title: '«Конверсионные лендинги»',
			description:
				'Как делать лендинги, которые цепляют смыслами и\u00A0превращают трафик в\u00A0заявки.',
			image: 'bg-[url("/images/courses/anomaly-img-27.webp")]'
		},
		{
			id: 8,
			badge: 'Продажи и маркетинг',
			title: '«Разбор маркетинговых воронок»',
			description:
				'Эфир с\u00A0Ульяной, CEO Аномалии, где на\u00A0реальных примерах воронок разбираем, где\u00A0теряются заявки, продажи и\u00A0деньги.',
			image: 'bg-[url("/images/courses/anomaly-img-28.webp")]'
		},
		{
			id: 9,
			badge: 'Продажи и маркетинг',
			title: '«Высокоохватные Reels»',
			description:
				'Как превратить Reels, Shorts и\u00A0TikTok в\u00A0систему лидогенерации: от\u00A0идей на\u00A0охваты до\u00A0заявок и\u00A0продаж.',
			image: 'bg-[url("/images/courses/anomaly-img-29.webp")]'
		}
	],
	niche: [
		{
			id: 1,
			badge: 'Ниша и продукт',
			title: '«Выбор ниши»',
			description:
				'1,5-часовое обучение Михаила Гребенюка о\u00A0том, как\u00A0выбрать нишу с\u00A0деньгами, спросом и\u00A0потенциалом роста, или\u00A0усилить конфигурацию текущего бизнеса.',
			image: 'bg-[url("/images/education/anomaly-img-08.webp")]'
		},
		{
			id: 2,
			badge: 'Ниша и продукт',
			title: '«Выбор Миши»',
			description:
				'19\u00A0рычагов трансформации бизнес-модели от\u00A0Михаила Гребенюка для\u00A0тех, кто\u00A0упёрся в\u00A0потолок и\u00A0хочет найти точки роста.',
			image: 'bg-[url("/images/courses/anomaly-img-30.webp")]'
		},
		{
			id: 3,
			badge: 'Ниша и продукт',
			title: '10-й эфир НЕмикробизнес «Ключевые факторы бизнес успеха (КФБУ)»',
			description:
				'Эфир о\u00A0том, как читать «генетику» бизнеса через 20\u00A0КФБУ и\u00A0понять, что менять, чтобы бизнес стал сильнее.',
			image: 'bg-[url("/images/courses/anomaly-img-31.webp")]'
		},
		{
			id: 4,
			badge: 'Ниша и продукт',
			title: '«Как создать сильный продукт на\u00A0рынке»',
			description:
				'Как\u00A0создать продукт, который выбирают не\u00A0из-за скидки, а\u00A0из-за понятной ценности.',
			image: 'bg-[url("/images/courses/anomaly-img-32.webp")]'
		},
		{
			id: 5,
			badge: 'Ниша и продукт',
			title: '«Выбор ниши через\u00A0ИИ»',
			description:
				'Как через GPT подобрать ниши под\u00A0свой опыт, ресурсы и\u00A0цели.',
			image: 'bg-[url("/images/courses/anomaly-img-33.webp")]'
		},
		{
			id: 6,
			badge: 'Ниша и продукт',
			title:
				'7-й эфир НЕмикробизнес «Как\u00A0собрать\u00A0твердую и\u00A0масштабируемую бизнес-модель»',
			description:
				'Эфир о\u00A0том, как понять, можно ли\u00A0достичь финансовой цели в\u00A0текущей нише или\u00A0пора менять конфигурацию.',
			image: 'bg-[url("/images/courses/anomaly-img-34.webp")]'
		}
	],
	ai: [
		{
			id: 1,
			badge: 'Нейросети',
			title: '«ИИ\u00A0— продвинутый уровень. Опыт\u00A0Askona»',
			description:
				'Как перейти от\u00A0«у\u00A0меня есть\u00A0GPT» к\u00A0«GPT помогает принимать бизнес-решения»\u00A0— на\u00A0примере развития медицинской компании Михаила Гребенюка.',
			image: 'bg-[url("/images/education/anomaly-img-09.webp")]'
		},
		{
			id: 2,
			badge: 'Нейросети',
			title: '«Нейросети в\u00A0ключевых бизнес-процессах»',
			description:
				'Как применять ИИ\u00A0для обработки заявок, составления КП, анализа менеджеров, отбора кандидатов и\u00A0их\u00A0онбординга.',
			image: 'bg-[url("/images/courses/anomaly-img-35.webp")]'
		},
		{
			id: 3,
			badge: 'Нейросети',
			title: '«База по\u00A0ИИ для\u00A0бизнеса»',
			description:
				'Как с\u00A0нуля начать использовать GPT\u00A0для бизнес-задач и\u00A0получать точные результаты без\u00A0миллиона правок.',
			image: 'bg-[url("/images/courses/anomaly-img-36.webp")]'
		}
	],
	team: [
		{
			id: 1,
			badge: 'Управление и команда',
			title: '«Реальное управление. Уровень\u00A01»',
			description:
				'Как управлять линейными сотрудниками через\u00A0метрики, контроль и\u00A0ответственность без\u00A0микроменеджмента.',
			image: 'bg-[url("/images/education/anomaly-img-10.webp")]'
		},
		{
			id: 2,
			badge: 'Управление и команда',
			title: '«Реальное управление. Уровень\u00A02»',
			description:
				'Как управлять руководителями так, чтобы\u00A0система работала без\u00A0ручного контроля владельца.',
			image: 'bg-[url("/images/courses/anomaly-img-37.webp")]'
		},
		{
			id: 3,
			badge: 'Управление и команда',
			title: '«Реальное управление. Уровень\u00A03»',
			description:
				'Как\u00A0управлять топами, чтобы\u00A0бизнес не\u00A0замыкался на\u00A0владельце.',
			image: 'bg-[url("/images/courses/anomaly-img-38.webp")]'
		},
		{
			id: 4,
			badge: 'Управление и команда',
			title: '11-й эфир НЕмикробизнес про\u00A0команду',
			description:
				'Эфир о\u00A0том, как\u00A0понять, кто\u00A0в\u00A0команде реально приносит результат, кто\u00A0поддерживает систему, а\u00A0кто\u00A0путает свою роль и\u00A0создаёт хаос.',
			image: 'bg-[url("/images/courses/anomaly-img-39.webp")]'
		},
		{
			id: 5,
			badge: 'Управление и команда',
			title: '«Ассистент предпринимателя»',
			description:
				'1\u00A0час\u00A020\u00A0минут о\u00A0том, как\u00A0найти ассистента, передать рутину и\u00A0освободить время на\u00A0задачи, которые двигают прибыль.',
			image: 'bg-[url("/images/courses/anomaly-img-40.webp")]'
		},
		{
			id: 6,
			badge: 'Управление и команда',
			title: 'Эфир Михаила Гребенюка с\u00A0Романом Ершовым',
			description:
				'Эфир с\u00A0президентом ГК\u00A0Askona о\u00A0том, как\u00A0выйти из\u00A0операционки, передать управление и\u00A0растить сильных руководителей.',
			image: 'bg-[url("/images/courses/anomaly-img-41.webp")]'
		}
	],
	finance: [
		{
			id: 1,
			badge: 'Прибыль и финансы',
			title: '«Основы финансов для\u00A0предпринимателей»',
			description:
				'Как через P&L, ДДС\u00A0и\u00A0финмодель видеть прибыль и\u00A0не\u00A0доводить бизнес до\u00A0кассовых разрывов.',
			image: 'bg-[url("/images/education/anomaly-img-11.webp")]'
		},
		{
			id: 2,
			badge: 'Прибыль и финансы',
			title: '«Ценообразование как\u00A0инструмент роста прибыли»',
			description:
				'Как\u00A0работать с\u00A0ценой через\u00A0затраты, конкурентов и\u00A0финмодель, а\u00A0не\u00A0на\u00A0ощущениях.',
			image: 'bg-[url("/images/courses/anomaly-img-42.webp")]'
		},
		{
			id: 3,
			badge: 'Прибыль и финансы',
			title: '«НДС, АУСН и\u00A0налоговая нагрузка»',
			description:
				'Как выбрать налоговый режим, посчитать нагрузку и\u00A0не\u00A0переплачивать налоги.',
			image: 'bg-[url("/images/courses/anomaly-img-43.webp")]'
		}
	],
	mind: [
		{
			id: 1,
			badge: 'Мышление и личная эффективность',
			title: '6-й эфир НЕмикробизнес про\u00A0ограничивающие установки',
			description:
				'Эфир о\u00A0том, как\u00A0найти установки, которые тормозят рост, и\u00A0переписать мышление под\u00A0новый уровень решений.',
			image: 'bg-[url("/images/education/anomaly-img-12.webp")]'
		},
		{
			id: 2,
			badge: 'Мышление и личная эффективность',
			title: '«Реальный миллион»',
			description:
				'Обучение Михаила Гребенюка о\u00A0том, как\u00A0пробить финансовый потолок выйти на\u00A0первый миллион через\u00A0пошаговый алгоритм 1–2-3.',
			image: 'bg-[url("/images/courses/anomaly-img-44.webp")]'
		},
		{
			id: 3,
			badge: 'Мышление и личная эффективность',
			title:
				'1-й эфир НЕмикробизнес про\u00A0фокус и\u00A0личную эффективность',
			description:
				'Эфир о\u00A0том, как\u00A0убрать лишнее, выйти из\u00A0аврала и\u00A0держать фокус на\u00A0главном.',
			image: 'bg-[url("/images/courses/anomaly-img-45.webp")]'
		},
		{
			id: 4,
			badge: 'Мышление и личная эффективность',
			title: '2-й эфир НЕмикробизнес «Как\u00A0качать бизнес системно»',
			description:
				'Эфир о\u00A0том, как\u00A0уйти из\u00A0режима пожарника, разложить бизнес на\u00A0ключевые области и\u00A0управлять ростом через\u00A0показатели.',
			image: 'bg-[url("/images/courses/anomaly-img-46.webp")]'
		},
		{
			id: 5,
			badge: 'Мышление и личная эффективность',
			title: '3-й эфир НЕмикробизнес про спринты и гипотезы',
			description:
				'Эфир о\u00A0том, как\u00A0качать метрики по\u00A0спринтам, приоритизировать гипотезы и\u00A0убирать хаос.',
			image: 'bg-[url("/images/courses/anomaly-img-47.webp")]'
		},
		{
			id: 6,
			badge: 'Мышление и личная эффективность',
			title:
				'4-й эфир челленджа НЕмикробизнес «8\u00A0стадий прокачки бизнеса»',
			description:
				'Эфир о\u00A0том, как\u00A0определить текущий уровень бизнеса и\u00A0понять, что\u00A0сейчас важнее: отрезать лишнее или\u00A0масштабировать.',
			image: 'bg-[url("/images/courses/anomaly-img-48.webp")]'
		}
	]
}
