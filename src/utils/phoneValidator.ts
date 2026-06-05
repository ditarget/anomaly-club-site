export function validatePhoneService(value: string): true | string {
	const digits = value.replace(/\D/g, '')

	if (digits.length < 10) return 'Введите не менее 10 цифр'
	if (digits.length > 15) return 'Введите не более 15 цифр'

	return true
}
