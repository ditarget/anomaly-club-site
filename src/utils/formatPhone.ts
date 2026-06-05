import { COUNTRY_CODE } from '@/src/constants/country.code.constants'

export function formatPhone(input: string): string {
	const startsWithPlus = input.trim().startsWith('+')

	let cleaned = input.replace(/[^\d+]/g, '')

	if (startsWithPlus) {
		cleaned = '+' + cleaned.slice(1).replace(/\+/g, '')
	} else {
		cleaned = cleaned.replace(/\+/g, '')
	}

	if (startsWithPlus && cleaned === '+') return '+'

	let rawDigits = cleaned.replace(/\D/g, '').slice(0, 15)

	// замена цифр 89 → 79 у номер РФ
	if (rawDigits.startsWith('89')) {
		rawDigits = '79' + rawDigits.slice(2)
	}

	if (!rawDigits) return startsWithPlus ? '+' : ''

	const countryCodes = COUNTRY_CODE
	let code = ''
	let rest = rawDigits

	for (const c of countryCodes) {
		if (rawDigits.startsWith(c)) {
			code = c
			rest = rawDigits.slice(c.length)
			break
		}
	}

	if (!code) {
		code = rawDigits.slice(0, 1)
		rest = rawDigits.slice(1)
	}

	const bracketLength = code.length >= 3 ? 2 : 3
	const inBrackets = rest.slice(0, bracketLength)
	const next = rest.slice(bracketLength, bracketLength + 3)
	const last = rest.slice(bracketLength + 3)

	let formatted = `+${code}`
	if (inBrackets) formatted += ` (${inBrackets}`
	if (next) formatted += `) ${next}`
	if (last) formatted += ` ${last}`

	return formatted
}
